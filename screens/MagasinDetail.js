import React from 'react'
import { View, Text } from 'react-native'
import { Divider } from 'react-native-elements/dist/divider/Divider'
import About from '../components/magasinDetail/About'
import MenuItems from '../components/magasinDetail/MenuItems'
import ViewCart from '../components/magasinDetail/ViewCart'

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


export default function MagasinDetail({route, navigation}) {
    return (
        <View>
            <About route={route} />
            <Divider width={1.8} style={{ marginVertical: 20 }}/>
            <MenuItems magasinName={route.params.name} vetements={vetements}/>
            <ViewCart navigation={navigation} />
        </View>
    )
}
