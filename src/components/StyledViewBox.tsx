import React, { Children, ClassType } from 'react'
import {View, StyleSheet, Text} from 'react-native';
import theme from '../theme';

interface props {
    children: any
    boxType:string
    style:object
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        margin: 10,
        marginVertical: 20,
        padding: 10,
        width:150,
        height:150,
        borderRadius: theme.borderRadius.borderRadius,
        alignItems: 'center'
    },
})


export default function StyledViewBox (props:props) {

    const ViewBoxStyles = [
        props.boxType == 'Bodycategory' && styles.container,
        props.style
    ]
    return(
        <View style={ViewBoxStyles}>
            {props.children}
        </View>
    )
}

