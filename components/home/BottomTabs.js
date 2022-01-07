import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export default function BottomTabs() {
    return (
        <View
        style={{
        flexDirection: "row",
        margin: 8,
        marginHorizontal: 12,
        justifyContent: "space-between",
      }}
    >
      <Icon icon="home" text="Accueil" />
      <Icon icon="search" text="Recherche" />
      <Icon icon="shopping-bag" text="Boutiques" />
      <Icon icon="receipt" text="Commandes" />
      <Icon icon="user" text="Compte" />
    </View>
    );
}

const Icon = (props) => (
    <TouchableOpacity>
        <View>
            <FontAwesome5 name={props.icon} size={25} style={{
                marginBottom: 3,
                alignSelf: "center",
            }}
            />
            <Text>{props.text}</Text>
        </View>
    </TouchableOpacity>
);