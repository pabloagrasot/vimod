import React from 'react'
import { FlatList, StyleSheet, View, Text} from 'react-native'
import {bodyCAtegory} from '../data/data'
import theme from '../theme'
import BodyItem from './BodyItem'


const styles = StyleSheet.create ({
    container: {
      marginTop: 20,
      flex: 1
    },
    heading: {
      fontSize: theme.fontSizes.heading,
      fontWeight: '700',
      justifyContent: 'center',
      alignItems:'center',
      textAlign:'center',
      padding: 10,
      marginVertical: 10       
  }
})


const ExercisesCategories = () => {
return(

  <View style={{flex: 1}}>

    <Text style={styles.heading}>Selecciona los ejercicios para la rutina</Text>
  
    <FlatList
        style={styles.container}
        numColumns={1}
        data={bodyCAtegory}
        renderItem={({item: category}) => (
            <BodyItem { ...category} />
        )}
      />
  </View>


)
}

export default ExercisesCategories