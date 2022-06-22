import React, {useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StatusBar,
  StyleSheet,
  BackHandler,
  Alert,
} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

// import Home from './botnav/HomeScreen';
import Chat from './TabBar/ChatScreen';
import Home from './TabBar/HomeScreen';
import Maps from './TabBar/MapsScreen';
import Profile from './TabBar/ProfileScreen';
import Camera from './TabBar/CameraScreen';

const Tab = createBottomTabNavigator();

const Tabs = ({navigation}) => {
  return (
    <Tab.Navigator screenOptions={styles.ScreenStyles}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.button}>
              <Icon
                name="home"
                size={30}
                color={focused ? '#ffffff' : '#cccccc'}
              />
              <Text style={{color: focused ? '#ffffff' : '#cccccc'}}>Home</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.button}>
              <Icon
                name="forum"
                size={30}
                color={focused ? '#ffffff' : '#cccccc'}
              />
              <Text style={{color: focused ? '#ffffff' : '#cccccc'}}>Chat</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Camera"
        component={Camera}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.qrCode}>
              {/* <TouchableOpacity style={styles.qrCode}> */}
              <Icon
                name="camera-alt"
                size={30}
                color={focused ? '#ffffff' : '#ffffff'}
              />
              {/* </TouchableOpacity> */}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Maps"
        component={Maps}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.button}>
              <Icon
                name="place"
                size={30}
                color={focused ? '#ffffff' : '#cccccc'}
              />
              <Text style={{color: focused ? '#ffffff' : '#cccccc'}}>Maps</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.button}>
              <Icon
                name="person"
                size={30}
                color={focused ? '#ffffff' : '#cccccc'}
              />
              <Text style={{color: focused ? '#ffffff' : '#cccccc'}}>
                Profile
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  button: {justifyContent: 'center', alignItems: 'center'},
  qrCode: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#98BB66',
    height: 50,
    width: 50,
    borderRadius: 30,
    marginBottom: 10,
  },
  ScreenStyles: {
    headerShown: false,
    tabBarShowLabel: false,
    tabBarHideOnKeyboard: true,
    // tabBarIconStyle: {display: 'none'},
    tabBarStyle: {
      backgroundColor: '#0f9562',
      borderRadius: 10,
      height: 80,
      elevation: 3,
      position: 'absolute',
      bottom: -10,
      left: 0,
      right: 0,
    },
  },
});

export default Tabs;
