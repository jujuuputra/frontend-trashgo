//Import
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//Import Material
//Screen
import HomeDemo from './Home';
import LoginDemo from './Login';
//Image

//Start Application
const Stack = createNativeStackNavigator();

const DemoApp = ({navigation}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="LoginDemo" component={LoginDemo} />
        <Stack.Screen name="HomeDemo" component={HomeDemo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// export default test;
export default DemoApp;
