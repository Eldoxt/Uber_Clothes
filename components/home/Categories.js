import React from 'react'
import { View, Text, Image, ScrollView  } from 'react-native'

const items = [
    {
        image: require('../../assets/images/manteau.png'),
        text: "Manteau",
    },
    {
        image: require('../../assets/images/pantalon.png'),
        text: "Pantalon",
    },
    {
        image: require('../../assets/images/tshirt.png'),
        text: "T-shirt",
    },
    {
        image: require('../../assets/images/veste.png'),
        text: "Veste",
    },
    {
        image: require('../../assets/images/shorts.png'),
        text: "Short",
    },
    
];

export default function Categories() {
    return (
        <View style={{
            marginTop: 5,
            backgroundColor: "#fff",
            paddingVertical: 10,
            paddingLeft: 20,
        }}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {items.map((item, index) => (
                <View key={index} style={{ alignItems: "center", marginRight: 30 }}>
                    <Image 
                    source={item.image} 
                    style={{
                        width: 50,
                        height: 40,
                        resizeMode: 'contain',
                    }}
                    />
                    <Text style={{ fontSize: 13, fontWeight: 'bold' }}>
                        {item.text}
                    </Text>
                </View>
                ))}
            </ScrollView>
        </View>
    );
}
