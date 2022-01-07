import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function HeaderTabs(props) {
    return (
        <View style={{ flexDirection: "row", alignSelf: "center", paddingTop:40 }}>
            <HeaderButton 
                text="Livraison" 
                btnColor="black" 
                textColor="white" 
                activeTab={props.activeTab} 
                setActiveTab={props.setActiveTab} 
            />
            <HeaderButton 
                text="Récupérer" 
                btnColor="white" 
                textColor="black" 
                activeTab={props.activeTab} 
                setActiveTab={props.setActiveTab} 
            />
        </View>
    )
}

const HeaderButton = (props) => (
    <View>
        <TouchableOpacity style={{
            backgroundColor: props.activeTab === props.text ? 'black' : 'white',
            paddingVertical: 6,
            paddingHorizontal: 16,
            borderRadius: 30,
        }}
        onPress={() => props.setActiveTab(props.text)}
    >
            <Text 
                style={{ 
                    color: props.activeTab === props.text ? "white" : "black", 
                    fontSize: 15,
                    fontWeight: "bold",
                }}
            >
                {props.text}
            </Text>
        </TouchableOpacity>
    </View>
)
