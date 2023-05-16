import React from 'react'
import {View, StyleSheet} from 'react-native';
import theme from '../theme';



interface props {
    children: any
    boxType:string
    style:object
}

const styles = StyleSheet.create ({
    containerCategories: {
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
    containerExercises: {
        flex: 1,
        margin: 10,
        marginVertical: 10,
        borderRadius: theme.borderRadius.borderRadius,
        alignItems: 'center',
        width: 'auto'
    }
})


export default function StyledViewBox (props:props) {

    const ViewBoxStyles = [
        props.boxType == 'Bodycategory' && styles.containerCategories,
        props.boxType == 'Exercisescategory' && styles.containerExercises,
        props.style
    ]

    const id = props.children.id;
        return(
            <View style={ViewBoxStyles}>
                {props.children}
            </View>
        )
    
}

