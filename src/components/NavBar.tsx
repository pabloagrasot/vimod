import React from 'react'
import {View, Image, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import {Link} from 'react-router-native'
import theme from '../theme';

const styles = StyleSheet.create ({


    image: {
        width: 30,
        height: 30,

    },

    navBar:{
       
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginBottom: 10,
        paddingVertical: 10,
        paddingHorizontal: 15,
    },

    item:{
        alignItems: 'center'
    },

    text:{
        fontSize: theme.fontSizes.small,
    },

})


const NavBar = () => {
    return (
        
        <View style={styles.navBar}>
            <Link component={TouchableWithoutFeedback} to='/'>
                <View style={styles.item}>
                    <Image
                    source={require('../../assets/brazo.png')}
                    style={styles.image}
                    />

                </View>
            </Link>

            <Link component={TouchableWithoutFeedback} to='/play'>
                <View style={styles.item}>
                    <Image
                    source={require('../../assets/pesa.png')}
                    style={styles.image}
                    />

                </View>
            </Link>

            <Link component={TouchableWithoutFeedback} to='/settings'>
                <View style={styles.item}>
                    <Image
                    source={require('../../assets/settings.png')}
                    style={styles.image}
                    />

                </View>
            </Link>
        </View>
    )
}

export default NavBar