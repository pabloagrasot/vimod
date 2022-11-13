import React from 'react'
import {View, StyleSheet, Text, TouchableWithoutFeedback, TouchableOpacity} from 'react-native';
import { Link, Route} from 'react-router-native';
import theme from '../theme';
import ExercisesCategories from './ExercisesCategories';


interface props {
    children: any
    boxType:string
    style:object
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        margin: 10,
        marginVertical: 30,
        padding: 10,
        width:150,
        height:150,
        borderRadius: theme.borderRadius.borderRadius,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
})


export default function StyledViewBox (props:props) {

    const ViewBoxStyles = [
        props.boxType == 'Bodycategory' && styles.container,
        props.style
    ]

    if (props.boxType === 'Bodycategory') {
        return(
        <Link style={ViewBoxStyles} to='/exercises' component={TouchableOpacity}>
            <View>
                {props.children}
            </View>
        </Link>
        )
    } else {
        return(
        <View style={ViewBoxStyles}>
            {props.children}
        </View>
        )
    }
}

