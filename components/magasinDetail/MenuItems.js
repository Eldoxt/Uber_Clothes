import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { Divider } from 'react-native-elements/dist/divider/Divider';
import { Image } from 'react-native-elements/dist/image/Image';
import { useDispatch, useSelector } from 'react-redux';




const styles = StyleSheet.create({
    menuItemStyle: {
        flexDirection: "row",
        justifyContent: 'space-between',
        margin: 20,
    },

    titleStyle: {
        fontSize: 19,
        fontWeight: "bold",
    },
});

export default function MenuItems({ magasinName, vetements, hideCheckbox, marginLeft }) {
        const dispatch = useDispatch();
        const selectItem = (item, checkboxValue) => dispatch({
        type: "ADD_TO_CART",
        payload: {...item, magasinName: magasinName, checkboxValue: checkboxValue,},
        });

        const cartItems = useSelector((state) => state.cartReducer.selectedItems.items);
        const isVetementInCart = (vetements, cartItems) =>
        Boolean(cartItems.find((item) => item.title === vetements.title));

    return (
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom: "80%"}}>
        {vetements.map((vetements, index) => (
            <View key={index} >
                <View style={styles.menuItemStyle} >
                    { hideCheckbox ? (<></>) : (<BouncyCheckbox 
                        iconStyle={{borderColor: "lightgray", borderRadius: 0}}
                        fillColor="red"
                        onPress={(checkboxValue) => selectItem(vetements, checkboxValue)} 
                        isChecked={isVetementInCart(vetements, cartItems)}/>)}
                    <VetementInfo vetements={vetements} />
                    <VetementImage vetements={vetements} marginLeft={marginLeft ? marginLeft: 0}/>
                </View>
                <Divider width={0.5} orientation='vertical' style={{ marginHorizontal: 20 }} />
            </View>
        ))}
    </ScrollView>
    );
}

const VetementInfo = (props) => (
    <View style={{width: 240, justifyContent: "space-evenly" }} >
        <Text style={styles.titleStyle}>{props.vetements.title}</Text>
        <Text>{props.vetements.description}</Text>
        <Text>{props.vetements.price}</Text>
    </View>
);

const VetementImage = ({marginLeft, ...props}) => (
    <View>
        <Image source={{uri: props.vetements.image}}
        style={{ width: 100, height: 100, borderRadius: 8, marginLeft: marginLeft,}} />
    </View>
);
