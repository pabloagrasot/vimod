import React from 'react'
import { FlatList, StyleSheet, View, Text} from 'react-native'
import {bodyCAtegory} from '../data/data'
import theme from '../theme'
import BodyItem from './BodyItem'


const styles = StyleSheet.create ({
    container: {
      marginTop: 10,
      marginHorizontal: 10,
    },
    heading: {
      fontSize: theme.fontSizes.heading,
      fontWeight: '700',
      justifyContent: 'center',
      alignItems:'center',
      textAlign:'center',
      padding: 10,
      marginVertical: 10,
      marginTop: 30,
      marginHorizontal: 30,
  }
})


const BodyCategoies = () => {
return(

  <View style={{flex: 1}}>

    <View>
      <Text style={styles.heading}>Busca ejercicios por grupos musculares</Text>
    </View>

    
      <FlatList
        style={styles.container}
        numColumns={2}
        data={bodyCAtegory}
        renderItem={({item: category}) => (
            <BodyItem { ...category} />
        )}
      />

  </View>


)
}

export default BodyCategoies