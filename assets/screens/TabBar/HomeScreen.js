import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import {
  View,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  PermissionsAndroid,
  ActivityIndicator,
  ScrollView,
  FlatList,
  StatusBar,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Appbar, IconButton, BottomNavigation, Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MapView from 'react-native-maps';

// Screen
import AppHeader from '../Header/AppHeader';

const Home = ({navigation}) => {
  return (
    // <AppHeader />
    <View
      style={{
        flex: 1,
      }}>
      <View>
        <StatusBar translucent backgroundColor="transparent" />

        <AppHeader></AppHeader>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.iconbox}
            onPress={() => navigation.navigate('NotifScreen')}>
            <Icon name="delete-outline" size={40} color={'#105263'} />
            <Text style={styles.texticonbox}>Laporkan</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.iconbox}
            onPress={() => navigation.navigate('Demo')}>
            <Icon name="calendar-today" size={40} color={'#105263'} />
            <Text style={styles.texticonbox}>Jadwal</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.iconbox}
            onPress={() => navigation.navigate('HistoryScreen')}>
            <Icon name="history" size={40} color={'#105263'} />
            <Text style={styles.texticonbox}>Riwayat</Text>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}>
        <View style={styles.ContScrollView}>
          <View style={styles.ContMaps}></View>
        </View>

        <View style={styles.textSpacing}>
          <Text style={styles.tulisanEdukasi}>
            Edukasi data sampah nasional
          </Text>
          <Text style={styles.tulisanKementrian}>
            Kementrian Lingkungan Hidup dan Kehutanan Republik Indonesia
          </Text>
        </View>

        <View style={styles.containerKotakEdukasi}>
          <View style={[{backgroundColor: '#FF0000'}, styles.kotakEdukasi]}>
            <Text style={styles.textInBox}>Timbulan Sampah</Text>
            <Text style={[styles.textInBox, {fontSize: 20}]}>
              36,740,685.50
            </Text>
            <Text style={styles.textInBox}>(ton/tahun)</Text>
          </View>
          <View style={[{backgroundColor: '#83DC4C'}, styles.kotakEdukasi]}>
            <Text style={styles.textInBox}>Timbulan Sampah</Text>
            <Text style={[styles.textInBox, {fontSize: 20}]}>
              36,740,685.50
            </Text>
            <Text style={styles.textInBox}>(ton/tahun)</Text>
          </View>
        </View>
        <View style={styles.containerKotakEdukasi}>
          <View style={[{backgroundColor: '#03A5BF'}, styles.kotakEdukasi]}>
            <Text style={styles.textInBox}>Timbulan Sampah</Text>
            <Text style={[styles.textInBox, {fontSize: 20}]}>
              36,740,685.50
            </Text>
            <Text style={styles.textInBox}>(ton/tahun)</Text>
          </View>
          <View style={[{backgroundColor: '#00811D'}, styles.kotakEdukasi]}>
            <Text style={styles.textInBox}>Timbulan Sampah</Text>
            <Text style={[styles.textInBox, {fontSize: 20}]}>
              36,740,685.50
            </Text>
            <Text style={styles.textInBox}>(ton/tahun)</Text>
          </View>
        </View>
        <View style={styles.containerKotakEdukasi}>
          <View style={[{backgroundColor: '#2D0307'}, styles.kotakEdukasi]}>
            <Text style={styles.textInBox}>Timbulan Sampah</Text>
            <Text style={[styles.textInBox, {fontSize: 20}]}>
              36,740,685.50
            </Text>
            <Text style={styles.textInBox}>(ton/tahun)</Text>
          </View>
          <View style={[{backgroundColor: '#E42BD2'}, styles.kotakEdukasi]}>
            <Text style={styles.textInBox}>Timbulan Sampah</Text>
            <Text style={[styles.textInBox, {fontSize: 20}]}>
              36,740,685.50
            </Text>
            <Text style={styles.textInBox}>(ton/tahun)</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  kotakEdukasi: {
    height: 100,
    width: 160,
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    borderRadius: 10,
  },
  containerKotakEdukasi: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 10,
  },
  textInBox: {
    fontFamily: 'Poppins-SemiBold',
    color: '#ffffff',
    fontSize: 12,
  },
  tulisanEdukasi: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 15,
    color: '#000000',
  },
  tulisanKementrian: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 10,
    color: '#999595',
  },
  scrollView: {
    marginTop: 10,
    margin: 5,
    marginBottom: 70,
  },
  ContScrollView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  ContMaps: {
    height: 300,
    width: 300,
    backgroundColor: '#d2d2d2',
    marginVertical: 10,
  },
  textSpacing: {marginHorizontal: 15},
  header: {
    height: 100,
    backgroundColor: '#105263',
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
    color: '#105263',
  },
});
export default Home;
