import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DashBoardScreen from '../screens/DashboardScreen';
import LogoutScreen from '../screens/LogoutScreen';

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={DashBoardScreen} />
      <Drawer.Screen name="Logout" component={LogoutScreen} />

    </Drawer.Navigator>
  );
};
export default DrawerNavigator;