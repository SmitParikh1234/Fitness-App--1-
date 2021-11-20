import * as React from "react";
import { Text, View, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export default function LogoutScreen (){
  return(
     <View>
     <Text style = {styles.appTitleText}>Logout!!!!</Text>
     </View>
  );
}

const styles = StyleSheet.create({
appTitleText: {
    marginTop:49,
    color: 'black',
    textAlign: 'center',
    fontSize: RFValue(40),
    fontFamily: 'cursive',
  },
})
