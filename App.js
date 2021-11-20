import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import DrawerNavigator from './navigations/DrawerNavigator';
import ChartScreen from './screens/ChartScreen';
import ExerciseScreen from './screens/ExerciseScreen';
import RecipeScreen from './screens/RecipeScreen';
import DashboardScreen from './screens/DashboardScreen';

export default class App extends React.Component {
   render(){
  return (
    
    <View>
    <AppContainer/>
    </View>
  );
  }
}

var AppNavigator = createSwitchNavigator({

    DashboardScreen:DashboardScreen,
    ExerciseScreen:ExerciseScreen,
    ChartScreen:ChartScreen,
    RecipeScreen:RecipeScreen

})

const AppContainer = createAppContainer(AppNavigator);


