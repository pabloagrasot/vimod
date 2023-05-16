import React from 'react'
import {View, Text}from 'react-native'
import Constants from 'expo-constants'
import {Route, Switch} from 'react-router-native'
import BodyCategoies from './BodyCategories'
import ExercisesCategories from './ExercisesCategories'
import NavBar from './NavBar'
import theme from '../theme'





const Main = () => {
    return (

        <View style={{ marginTop: Constants.statusBarHeight, flex: 1, backgroundColor: theme.colors.blueD}}>
            <Switch>
                <Route path='/' exact>
                    <BodyCategoies />
                </Route>


                <Route exact path='/exercises/:id'>
                    <ExercisesCategories />
                </Route>

                <Route exact path='/play'>
                    <Text>Play</Text>
                </Route>

                <Route exact path='/settings'>
                    <Text>Configuracion</Text>
                </Route>
            </Switch>
            <NavBar />
        </View>

        

    )
}

export default Main