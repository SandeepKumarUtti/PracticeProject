import React from 'react';

import HomeScreen from '../screens/Home/Home';
import CameraScreen from '../screens/CameraScreen/CameraScreen';

import {createStackNavigator} from '@react-navigation/stack';
import HeaderComponent from '../components/HeaderComponent/HeaderComponent';
import LoginScreen from '../screens/Login/Login';
const MainStackNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerMode: 'screen',
      }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'HOME',
          headerShown: true,
          header: HeaderComponent,
        }}
      />
      <Stack.Screen name="CameraScreen" component={CameraScreen} />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
