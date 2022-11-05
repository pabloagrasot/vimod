import React from 'react'
import {Text, View }from 'react-native'
import Constants from 'expo-constants'
import BodyCategoies from './BodyCategories'


const Main = () => {
    return (

        <View style={{marginTop: Constants.statusBarHeight, flexGrow: 1}}>
            <Text>Busca ejercicios por grupos musculares</Text>
            <BodyCategoies/>
        </View>
    )
}

export default Main