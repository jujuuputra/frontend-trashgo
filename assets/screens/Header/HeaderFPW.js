import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

const HeaderFPW = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back-ios" size={25} color="#fff"></Icon>
        </TouchableOpacity>

        <View style={{flex: 1, alignItems: 'flex-end'}}>
          <Text style={styles.headerFont}>Lupa Password</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#105263',
    height: 80,
    flexDirection: 'row',
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  headerFont: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: '#fff',
  },
});
export default HeaderFPW;
