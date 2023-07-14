import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainStackNavigator from './MainStackNavigator';
import {navigationRef} from '../utilities/navigation/navigation';

const RootNavigator = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <MainStackNavigator />
    </NavigationContainer>
  );
};
export default RootNavigator;
