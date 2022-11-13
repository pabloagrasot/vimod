import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import theme from '../theme';
import StyledViewBox from './StyledViewBox'



interface BodyCategoies {
    id: string
    exCategory: string
    img: any
    color: string
    colors: any
}

const styles = StyleSheet.create ({

    imageContainer: {
        top: -45,
        backgroundColor: theme.colors.trasparentWhite,
        borderRadius: 50,
        padding: 13,
        borderWidth: 1.5,
        borderStyle: 'solid',

    },
    
    image: {
        width: 45,
        height: 45,
    },
    
    bodyTitle: {
        fontSize: theme.fontSizes.subheading,
        fontWeight: '700',
        marginTop: -30,
        textAlign: 'center',
    },
    bodyDescription:{
        fontSize: theme.fontSizes.body,
    },
    flex1:{
        flex:1
    }
})

const BodyItem = (props: BodyCategoies) => {


const color = props.color

return (

    
<StyledViewBox key={props.id} boxType='Bodycategory' style={{backgroundColor:color}}>

            
    <View style={[styles.imageContainer, {borderColor: color}]} >
        <Image
            source={props.img}
            style={styles.image}
            />
    </View>



    <View style={styles.flex1}>
        <Text style={styles.bodyTitle}>{props.exCategory}</Text>
        <Text>Biceps, antebrazo, tensores, etc..................................................................</Text>
    </View>

</StyledViewBox>
)}

export default BodyItem