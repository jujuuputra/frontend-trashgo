import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {useNavigation} from '@react-navigation/native';

import HeaderMaps from '../Header/HeaderMaps';

const Maps = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View>
        <HeaderMaps />
      </View>
      <TouchableOpacity
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 30, fontWeight: 'bold'}}>Maps Screen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Maps;
