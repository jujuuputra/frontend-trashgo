import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

const HeaderLaporan = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back-ios" size={25} color="#fff"></Icon>
        </TouchableOpacity>
        <View style={{flex: 1, alignItems: 'flex-end'}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={styles.headerFont}>Laporan</Text>
            {/* <Icon name="notifications-none" size={25} color="#fff"></Icon> */}
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#105263',
    height: 90,
    flexDirection: 'row',
    paddingTop: 30,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  headerFont: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: '#fff',
    marginRight: 10,
  },
});
export default HeaderLaporan;
