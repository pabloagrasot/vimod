import React from 'react'
import { useState, useEffect } from 'react'
import { FlatList, StyleSheet, View, Text} from 'react-native'
import { useParams } from 'react-router-native'
import {exercises} from '../data/dataExercises'
import theme from '../theme'
import ExerciseItem from './ExerciseItem'


interface RouteParams {
  id:string
}


type Exercise = {
  id: string;
  exName: string;
  exDescription: string;
  img: any;
  colors: string;
}

type Category = {
  [key:string]: Exercise
}

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




const ExercisesCategories = () => {

const {id} = useParams<RouteParams>()
const [data, setData] = useState({})



useEffect(() => {
setData(exercises[id as keyof typeof exercises])
}, [])


return(
  
  <View style={{flex: 1}}>

    <Text style={styles.heading}>Selecciona los ejercicios para la rutina {id}</Text>
  
    <FlatList
        style={styles.container}
        numColumns={1}
        // @ts-ignore
        data={data}
        renderItem={({item: exercise}) => (
            <ExerciseItem { ...exercise} />
        )}
      />
  </View>


)
}

export default ExercisesCategories