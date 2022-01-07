import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { Divider } from 'react-native-elements/dist/divider/Divider';
import { Image } from 'react-native-elements/dist/image/Image';
import { useDispatch, useSelector } from 'react-redux';

const vetements = [
    {
        title: "Robe",
        description: "ROBE À COL MONTANT ET MANCHES LONGUES. BROCHE SUR LE DEVANT À LA TAILLE.",
        price: "$13.99",
        image: "https://img01.ztat.net/article/spp-media-p1/0a611c50a27044918254ac5569d32a75/079dd8897b174f23b6958cec8ccdbaa7.png?imwidth=1800&filter=packshot",
    },
    {
        title: "Veste",
        description: "BLOUSON À COL MONTANT ET MANCHES LONGUES. POCHES AVANT ZIPPÉES. PASSANTS ET CEINTURE BIMATIÈRE TON SUR TON AVEC BOUCLES EN MÉTAL. DOUBLURE EN CONTRASTE. FERMETURE PAR ZIP EN MÉTAL.",
        price: "$30.99",
        image: "https://static.zara.net/photos///2021/I/0/1/p/2969/240/800/2/w/850/2969240800_6_1_1.jpg?ts=1632733034686",
    },
    {
        title: "Jean",
        description: "JEANS TAILLE HAUTE À CINQ POCHES. OURLET SANS COUTURES AVEC FENTES LATÉRALES. FERMETURE À L'AVANT PAR ZIP ET BOUTON MÉTALLIQUE.",
        price: "$20.99",
        image: "https://static.zara.net/photos///2021/I/0/1/p/4124/240/800/2/w/850/4124240800_6_1_1.jpg?ts=1629192724916",
    },
    {
        title: "Manteau",
        description: "MANTEAU AVEC COL À REVERS ET MANCHES LONGUES. POCHES PASSEPOILÉES SUR LE DEVANT. FERMETURE PORTEFEUILLE À BOUTON SUR LE DEVANT.",
        price: "$20.99",
        image: "https://static.zara.net/photos///2021/I/0/1/p/4391/703/800/2/w/850/4391703800_6_1_1.jpg?ts=1631017103424",
    },{
        title: "Manteau",
        description: "MANTEAU AVEC COL À REVERS ET MANCHES LONGUES. POCHES PASSEPOILÉES SUR LE DEVANT. FERMETURE PORTEFEUILLE À BOUTON SUR LE DEVANT.",
        price: "$20.99",
        image: "https://static.zara.net/photos///2021/I/0/1/p/4391/703/800/2/w/850/4391703800_6_1_1.jpg?ts=1631017103424",
    },
    
];



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

export default function MenuItems({ magasinName }) {
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
                    <BouncyCheckbox 
                        iconStyle={{borderColor: "lightgray", borderRadius: 0}}
                        fillColor="red"
                        onPress={(checkboxValue) => selectItem(vetements, checkboxValue)} 
                        isChecked={isVetementInCart(vetements, cartItems)}/>
                    <VetementInfo vetements={vetements} />
                    <VetementImage vetements={vetements} />
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

const VetementImage = (props) => (
    <View>
        <Image source={{uri: props.vetements.image}}
        style={{ width: 100, height: 100, borderRadius: 8}} />
    </View>
);
