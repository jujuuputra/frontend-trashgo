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

const HeaderChatting = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back-ios" size={25} color="#fff"></Icon>
        </TouchableOpacity>
        <Image
          source={require('../../img/sampah.svg')}
          style={{
            width: 40,
            height: 40,
            borderRadius: 40,
            backgroundColor: '#d2d2d2',
          }}
        />
        <View style={{flex: 1, alignItems: 'flex-end'}}>
          <Text style={styles.headerFont}>Grup Kp. Baru</Text>
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
  },
});
export default HeaderChatting;
