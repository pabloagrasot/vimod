import React from 'react'
import {View }from 'react-native'
import Constants from 'expo-constants'
import {Route, Switch} from 'react-router-native'
import BodyCategoies from './BodyCategories'
import ExercisesCategories from './ExercisesCategories'





const Main = () => {
    return (

        <View style={{marginTop: Constants.statusBarHeight, flex: 1}}>
            <Switch>
                <Route path='/' exact>
                    <BodyCategoies/>
                </Route>

                <Route path='/exercises'>
                    <ExercisesCategories/>
                </Route>


            </Switch>  
        </View>
    )
}

export default Main