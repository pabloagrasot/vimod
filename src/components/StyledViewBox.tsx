import React, { Children, ClassType } from 'react'
import {View, StyleSheet, Text} from 'react-native';
import { Link } from 'react-router-native';
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

    link: {
        width: 'auto',
        marginHorizontal: 'auto',
        
    }
})


export default function StyledViewBox (props:props) {

    const ViewBoxStyles = [
        props.boxType == 'Bodycategory' && styles.container,
        props.style
    ]
    return(
        <Link style={styles.link} to='/exercises'>
            <View
                style={ViewBoxStyles}>
                {props.children}
            </View>
        </Link>

    )
}

