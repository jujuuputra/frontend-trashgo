import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  PermissionsAndroid,
  ActivityIndicator,
  ScrollView,
  FlatList,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialIcons';
// Screen

const AppHeaderBelow = ({navigation}) => {
  return (
    // <AppHeader />
    <View
      style={{
        flex: 1,
      }}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.iconbox}>
          <Icon name="delete-outline" size={40} color={'#0f9562'} />
          <Text style={styles.texticonbox}>Laporkan</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconbox}>
          <Icon name="calendar-today" size={40} color={'#0f9562'} />
          <Text style={styles.texticonbox}>Jadwal</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.iconbox}
          onPress={() => navigation.navigate('HistoryScreen')}>
          <Icon name="history" size={40} color={'#0f9562'} />
          <Text style={styles.texticonbox}>Riwayat</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 100,
    backgroundColor: '#0f9562',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  iconbox: {
    height: 65,
    width: 65,
    borderRadius: 10,
    backgroundColor: '#d2d2d2d2',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    elevation: 10,
  },
  texticonbox: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 10,
    color: '#0f9562',
  },
});
export default AppHeaderBelow;
