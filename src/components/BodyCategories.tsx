import React from 'react'
import { FlatList, StyleSheet}from 'react-native'
import {bodyCAtegory} from '../data/data'
import BodyItem from './BodyItem'


const styles = StyleSheet.create ({
    container: {
      marginTop: 20
    },
})

const BodyCategoies = () => {
return(
    <FlatList
        style={styles.container}
        numColumns={2}
        data={bodyCAtegory}
        renderItem={({item: category}) => (
            <BodyItem { ...category} />
        )}
      />
)
}

export default BodyCategoies