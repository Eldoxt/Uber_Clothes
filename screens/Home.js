import React, {useEffect, useState} from 'react';
import { View, Text, ScrollView } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import { Divider } from 'react-native-elements/dist/divider/Divider';
import BottomTabs from '../components/home/BottomTabs';
import Categories from '../components/home/Categories';
import HeaderTabs from '../components/home/HeaderTabs';
import MagasinItem, { localMagasins } from '../components/home/MagasinItems';
import SearchBar from '../components/home/SearchBar';

const YELP_API_KEY = "zUCu5ju8kSEZo5MShFu0_Y7DuEo9XiUuCTpbWapoSA7ruDAYbZ6I3DbhDRpVhytecKp0n89RudXmAMTMJl5hO4oxix4uVprMBpYhdbEvAYiWNUvQN43Gm70641HUYXYx";

export default function Home({ navigation }) {
    const [magasinData, setMagasinData] = useState(localMagasins);
    const [city, setCity] = useState("pas-de-calais");
    const [activeTab, setActiveTab] = useState("Livraison");

    const getMagasinsFromYelp = () => {
        const yelpurl = `https://api.yelp.com/v3/businesses/search?term=clothes&location=${city}`

    const apiOptions = {
        headers: {
            Authorization: `Bearer ${YELP_API_KEY}`,
        },
    };

    return fetch(yelpurl, apiOptions)
    .then((res) => res.json())
    .then((json) =>
      setMagasinData(json.businesses)
        // json.businesses.filter((business) =>
        //   business.transactions.includes(activeTab.toLowerCase())
        // )
    );
};

    useEffect(() => {
        getMagasinsFromYelp();
    }, [city, activeTab]);

    return (
        <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
            <View style={{ backgroundColor: "white", padding: 15 }}>
                <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
                <SearchBar cityHandler={setCity} />
            </View>
            <ScrollView showsVerticalScrollIndicator={false} >
                <Categories />
                <MagasinItem  magasinData={magasinData} navigation={navigation}/>
            </ScrollView>
            <Divider width={1} />
            <BottomTabs />
        </SafeAreaView>
    );
}
