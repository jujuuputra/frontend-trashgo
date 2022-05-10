import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  ScrollView,
  StyleSheet,
  Button,
  FlatList,
  Alert,
  ToastAndroid,
  BackHandler,
  PermissionsAndroid,
  ActivityIndicator,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//gambar
import SampahImg from './assets/img/iconsampah.svg';

//screen
import Login from './assets/screens/login';
import SignUp from './assets/screens/signup';
import Home from './assets/screens/home';

//batas

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator style={{justifyContent: 'center', alignItems: 'center'}}>
        <Stack.Screen
          name="Main"
          component={Main}
          options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen name="Home" component={Home}></Stack.Screen>
        <Stack.Screen name="Login" component={Login}></Stack.Screen>
        <Stack.Screen name="SignUp" component={SignUp}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Main = ({navigation}) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
      }}>
      <View>
        <Text
          style={{
            fontSize: 30,
            fontWeight: 'bold',
            color: '#29b6f6',
            paddingTop: 10,
            fontFamily: 'Anton-Regular',
          }}>
          TRASH-GO
        </Text>
      </View>

      <View style={{flex: 0.9, justifyContent: 'center', alignItems: 'center'}}>
        <SampahImg height={300} width={300}></SampahImg>
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        style={{
          backgroundColor: '#29b6f6',
          marginHorizontal: 20,
          paddingVertical: 10,
          paddingHorizontal: 90,
          borderRadius: 10,
          elevation: 7,
        }}>
        <Text style={{color: '#fff', fontWeight: 'bold'}}>
          Let's Get Started
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default App;
