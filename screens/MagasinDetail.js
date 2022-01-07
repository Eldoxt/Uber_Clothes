import React from 'react'
import { View, Text } from 'react-native'
import { Divider } from 'react-native-elements/dist/divider/Divider'
import About from '../components/magasinDetail/About'
import MenuItems from '../components/magasinDetail/MenuItems'
import ViewCart from '../components/magasinDetail/ViewCart'

export default function MagasinDetail({route, navigation}) {
    return (
        <View>
            <About route={route} />
            <Divider width={1.8} style={{ marginVertical: 20 }}/>
            <MenuItems magasinName={route.params.name}/>
            <ViewCart navigation={navigation} />
        </View>
    )
}
