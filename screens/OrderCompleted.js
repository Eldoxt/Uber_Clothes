import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { useSelector } from 'react-redux';
import LottieView from "lottie-react-native";

export default function OrderCompleted() {
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
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
        <LottieView
          style={{ height: 100, alignSelf: "center", marginBottom: 30 }}
          source={require("../assets/animations/check-mark.json")}
          autoPlay
          speed={0.5}
          loop={false}
        />
            <Text>Ta commande à {magasinName}  est de {totalUSD}</Text>
        </SafeAreaView>
    );
}
