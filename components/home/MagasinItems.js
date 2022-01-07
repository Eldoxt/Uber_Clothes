import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export const localMagasins = [

{
    name: "H&M",
    image_url: "http://1.bp.blogspot.com/--TlGQ5ulUvQ/U2ADXhc-scI/AAAAAAAASEQ/v36aomP3Diw/s1600/1274910873store_details_hm.jpg",
    categories: ["Jean", "Veste"],
    price: "$$",
    reviews: 1244,
    rating: 4.5,
},
{
  name: "Zara",
  image_url:
    "https://emac.es/public/Image/2021/7/zara.jpg",
  categories: ["Jean", "Veste"],
  price: "$$",
  reviews: 689,
  rating: 4.7,
},
{
  name: "Lacoste",
  image_url:
    "https://www.destreland.com/uploads/media/default/0001/01/92943c9db2bde651ae4694e8f0d467fef0bb4dc7.jpeg",
  categories: ["Pantalon", "Jean"],
  price: "$$",
  reviews: 700,
  rating: 3.7,
}

]

export default function MagasinItem({ navigation, ...props }) {
    return (
        <>
        {props.magasinData.map((magasin, index) => (
        <TouchableOpacity
            key={index}
            activeOpacity={1} 
            style={{ marginBottom: 30 }} 
            onPress={() => 
                navigation.navigate("MagasinDetail", {
                    name: magasin.name,
                    image: magasin.image_url,
                    price: magasin.price,
                    reviews: magasin.review_count,
                    rating: magasin.rating,
                    categories: magasin.categories,
                    })
                }
            >
                <View 
                key={index}
                style={{
                marginTop: 10, 
                padding: 15, 
                backgroundColor: "white"
            }}>
                <MagasinImage image={magasin.image_url}/>
                <MagasinInfo name={magasin.name} rating={magasin.rating}/>
            </View>
        </TouchableOpacity>
            ))}
        </>
    )
}

const MagasinImage = (props) => (
    <>
    <Image source={{
        uri: props.image,
    }}
    style={{ width: "100%", height: 180 }}
    />
    <TouchableOpacity style={{ position: 'absolute', right:20, top: 20}}>
        <MaterialCommunityIcons name='heart-outline' size={25} color='#fff' />
    </TouchableOpacity>
    </>
);

const MagasinInfo = (props) => (
    <View style={{
        flexDirection: "row", 
        justifyContent: "space-between", 
        alignItems: "center", 
        marginTop: 10,
        }}
    >
    <View>
        <Text style={{ fontSize: 15, fontWeight: "bold" }}>{props.name}</Text>
        <Text style={{ fontSize: 13, color: "gray" }}>30-45 • min</Text>
    </View>
    <View style={{ backgroundColor: "#eee", height: 30, width: 30, alignItems: "center", justifyContent: "center", borderRadius: 15,}}>
        <Text >{props.rating}</Text>
    </View>
    </View>
)