//Import
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//Import Material
//Screen
import Home from './TabBar/HomeScreen';
import Chat from './TabBar/ChatScreen';
import Maps from './TabBar/MapsScreen';
import Profile from './TabBar/ProfileScreen';
import Tabs from './BotNavTabs';
import Login from './LoginScreen';
import SignUp from './SignUpScreen';
import ChangePassword from './Features/ChangePassword';
import ForgetPassword from './Features/ForgetPassword';
import test from './Features/test';
import HistoryScreen from './HistoryScreen';
import ChattingScreen from './Features/ChattingScreen';
import Demo from './Features/test';
import NotifScreen from './Features/NotifScreen';
import SplashScreen from './SplashScreen';
import SettingScreen from './Features/SettingScreen';
import EditProfile from './Features/EditProfile';
//Image

//Start Application
const Stack = createNativeStackNavigator();

const AllScreen = ({navigation}) => {
  return (
    // <NavigationContainer>
    //   <Tabs />
    // </NavigationContainer>
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="Login"
          component={Login}
          // options={{headerShown: false}}
        />
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="Tabs" component={Tabs} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="HistoryScreen" component={HistoryScreen} />
        <Stack.Screen name="ChattingScreen" component={ChattingScreen} />
        <Stack.Screen name="NotifScreen" component={NotifScreen} />
        <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
        <Stack.Screen name="ChangePassword" component={ChangePassword} />
        <Stack.Screen name="SettingScreen" component={SettingScreen} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// export default test;
export default AllScreen;
