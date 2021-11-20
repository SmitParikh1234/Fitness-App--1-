import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
  Platform,
  StatusBar,
  ImageBackground,
  Image,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { RFValue } from 'react-native-responsive-fontsize';
import DrawerNavigator from '../navigations/DrawerNavigator';
import ChartScreen from './ChartScreen';
import ExerciseScreen from './ExerciseScreen';
import RecipeScreen from './RecipeScreen';

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <View style={styles.appTitle}>
          <Image
            source={require('../assets/logo.png')}
            style={styles.appIcon}></Image>
          <Text style={styles.appTitleText}>Fitness App</Text>
        </View>

        <View style = {styles.buttonContainer}>
        <TouchableOpacity style = {styles.buttonStyle}
        onPress={() => this.props.navigation.navigate('ExerciseScreen')}>
        <Image 
        source={require('../assets/sportLogo.png')}
        style = {styles.icon1Image}></Image>
        <Text style={styles.buttonText}>Daily Exercises</Text>
        </TouchableOpacity>
        </View>

        <View style = {styles.buttonContainer}>
        <TouchableOpacity style = {styles.button1Style}
        onPress={() => this.props.navigation.navigate('ChartScreen')}>
        <Image 
        source={require('../assets/view.png')}
        style = {styles.icon2Image}></Image>
        <Text style={styles.buttonText}>Various Charts</Text>
        </TouchableOpacity>
        </View>

        <View style = {styles.buttonContainer}>
        <TouchableOpacity style = {styles.button2Style}
        onPress={() => this.props.navigation.navigate('RecipeScreen')}>
        <Image 
        source={require('../assets/food.png')}
        style = {styles.icon3Image}></Image>
        <Text style={styles.buttonText}>Daily Recipes</Text>
        </TouchableOpacity>
        </View>


        <View></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'navy',
  },

  buttonContainer: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },

  droidSafeArea: {
    marginTop:
      Platform.OS === 'android' ? StatusBar.currentHeight : RFValue(35),
  },

  appTitle: {
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
  },

  appIcon: {
    marginTop: 39,
    width: RFValue(130),
    height: RFValue(130),
    resizeMode: 'contain',
  },

  appTitleText: {
    marginTop: 49,
    color: 'white',
    textAlign: 'center',
    fontSize: RFValue(40),
    fontFamily: 'cursive',
  },

  buttonStyle: {
    marginTop: 187,
    marginLeft: 4,
    width: RFValue(297),
    height: RFValue(65),
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderWidth: 4,
    borderColor: 'black',
    borderRadius: RFValue(1),
    backgroundColor: 'blue',
  },

  button1Style: {
    marginTop: 56,
    marginLeft: 6,
    width: RFValue(300),
    height: RFValue(65),
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: RFValue(1),
    borderWidth: 4,
    borderColor: 'black',
    backgroundColor: 'blue',
  },

  button2Style: {
    marginTop: -72,
    marginLeft: 6,
    width: RFValue(300),
    height: RFValue(65),
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: RFValue(1),
    borderWidth: 4,
    borderColor: 'black',
    backgroundColor: 'blue',
  },

  buttonText: {
    color: 'white',
    fontSize: RFValue(28),
    fontFamily: 'cursive',
  },

  icon1Image: {
    position: 'absolute',
    height: 100,
    width: 60,
    resizeMode: 'contain',
    right: -17,
    top: -50,
  },

  icon2Image: {
    position: 'absolute',
    height: 50,
    width: 200,
    resizeMode: 'contain',
    right: -85,
    top: -15,
  },

  icon3Image: {
    position: 'absolute',
    height: 50,
    width: 200,
    resizeMode: 'contain',
    right: -85,
    top: -15,
  },
});
