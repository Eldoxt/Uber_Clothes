import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, ScrollView  } from 'react-native';
import { useSelector } from 'react-redux';
import LottieView from "lottie-react-native";
import firebase from "../firebase";
import MenuItems from '../components/magasinDetail/MenuItems';

export default function OrderCompleted() {
    const [lastOrder, setLastOrder] = useState({
        items: [
            {
              title: "Bologna",
              description: "With butter lettuce, tomato and sauce bechamel",
              price: "$13.50",
              image:
                "https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg",
            },
          ],
    });
    const { items, magasinName } = useSelector(
        (state) => state.cartReducer.selectedItems
      );
    const total = items
    .map((item) => Number(item.price.replace("$", "")))
    .reduce((prev, curr) => prev + curr, 0);

  const totalUSD = total.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  });

  useEffect(() => {
      const db =firebase.firestore();
      const unsubscribe =
      db.collection("orders").orderBy('createdAt', 'desc').limit(1).onSnapshot((snapshot) => {
          snapshot.docs.map((doc) => {
              setLastOrder(doc.data());
          });
      });
      return () => unsubscribe();
  }, []);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
          <View style={{
          margin: 15,
          alignItems: "center",
          height: "100%",
        }}>
            <LottieView
              style={{ height: 200, alignSelf: "center", marginBottom: 30 }}
              source={require("../assets/animations/74644-add-to-basket.json")}
              autoPlay
              speed={0.5}
              loop={false}
            />
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>Ta commande à {magasinName} est de ${totalUSD}</Text>
              <ScrollView>
                <MenuItems
                vetements={lastOrder.items}
                hideCheckbox={true}
                marginLeft={10}
              />
            </ScrollView>
            <LottieView
                style={{ height: 200, alignSelf: "center", marginBottom: 30 }}
                source={require("../assets/animations/36605-shopping-cart.json")}
                autoPlay
                speed={0.5}
                loop={false}
            />
          </View>
        </SafeAreaView>
    );
}
