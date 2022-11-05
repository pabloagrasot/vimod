import React from 'react'
import {Text, View, StyleSheet}from 'react-native'
import Constants from 'expo-constants'
import BodyCategoies from './BodyCategories'
import theme from '../theme'

const styles = StyleSheet.create ({

    heading: {
        fontSize: theme.fontSizes.heading,
        fontWeight: '700',
        justifyContent: 'center',
        alignItems:'center',
        textAlign:'center',
        padding: 10,
        marginVertical: 10       
    },
})

const Main = () => {
    return (

        <View style={{marginTop: Constants.statusBarHeight, flexGrow: 1}}>
            <Text style={styles.heading}>Busca ejercicios por grupos musculares</Text>
            <BodyCategoies/>
        </View>
    )
}

export default Main