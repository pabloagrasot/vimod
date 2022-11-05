import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import theme from '../theme';
import StyledViewBox from './StyledViewBox'


interface BodyCategoies {
    id: string
    exCategory: string
    img: any
    color: string
}

const styles = StyleSheet.create ({

    imageContainer: {
        top: -45,
        backgroundColor: theme.colors.trasparentWhite,
        borderRadius: 50,
        padding: 13
    },
    
    image: {
        width: 45,
        height: 45,
    },
    
    text: {
        fontSize: theme.fontSizes.subheading,
        fontWeight: '700'
    }
})

const BodyItem = (props: BodyCategoies) => (

<StyledViewBox key={props.id} boxType='Bodycategory' style={{backgroundColor: props.color}}>
    <View style={styles.imageContainer}>
        <Image
            source={props.img}
            style={styles.image}
        />
    </View>
    <Text style={styles.text}>{props.exCategory}</Text>
    </StyledViewBox>
)

export default BodyItem