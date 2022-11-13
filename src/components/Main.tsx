import React from 'react'
import {View, Text}from 'react-native'
import Constants from 'expo-constants'
import {Route, Switch} from 'react-router-native'
import BodyCategoies from './BodyCategories'
import ExercisesCategories from './ExercisesCategories'
import NavBar from './NavBar'





const Main = () => {
    return (

        <View style={{ marginTop: Constants.statusBarHeight, flex: 1 }}>
            <Switch>
                <Route path='/' exact>
                    <BodyCategoies />
                </Route>


                <Route path='/exercises'>
                    <ExercisesCategories />
                </Route>

                <Route path='/play'>
                    <Text>Play</Text>
                </Route>

                <Route path='/settings'>
                    <Text>Configuracion</Text>
                </Route>
            </Switch>
            <NavBar />
        </View>

        

    )
}

export default Main