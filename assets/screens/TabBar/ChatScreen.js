import {NavigationContainer} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
//screen
import HeaderChat from '../Header/HeaderChat';

const Chat = ({navigation}) => {
  // const navigation = useNavigation();
  return (
    <View>
      <View>
        <HeaderChat />
      </View>
      <View style={styles.ContPage}>
        <View style={styles.ContPage2}>
          <View style={styles.ContPilihan}>
            <Text style={styles.textPil}>Pilihan</Text>
            <View style={styles.ContIcon1}>
              <View style={styles.ContIcon2}>
                <TouchableOpacity style={styles.IconBox}>
                  <Icon name="email" color={'#e4ecdc'} size={30}></Icon>
                </TouchableOpacity>
                <Text style={styles.TextIcon}>Pesan</Text>
              </View>
              <View style={styles.ContIcon2}>
                <TouchableOpacity style={styles.IconBox}>
                  <Icon name="group" color={'#e4ecdc'} size={35}></Icon>
                </TouchableOpacity>
                <Text style={styles.TextIcon}>Grup Chat</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.ContPage3}>
          <Text style={styles.textPil}>Chat terbaru</Text>
          <TouchableOpacity
            style={{flexDirection: 'row'}}
            onPress={() => navigation.navigate('ChattingScreen')}>
            <View style={styles.IconBoxChat}>
              <Icon name="group" color={'#e4ecdc'} size={35}></Icon>
            </View>
            <View>
              <Text style={styles.namaGrup}>Grup Kp. Baru</Text>
              <Text>Saya: jadwalnya udh muncul tuh</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ContPage: {
    marginTop: 10,
    marginHorizontal: 20,
  },
  ContPage2: {
    alignItems: 'center',
  },
  ContPage3: {
    marginTop: 20,
  },
  textPil: {
    fontFamily: 'Poppins-Bold',
    color: '#000',
    fontSize: 20,
  },
  ContPilihan: {
    width: 320,
    backgroundColor: '#e4ecdc',
    padding: 15,
    borderRadius: 20,
    elevation: 5,
  },
  IconBox: {
    backgroundColor: '#0f9562',
    borderRadius: 40,
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  IconBoxChat: {
    backgroundColor: '#0f9562',
    borderRadius: 50,
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  TextIcon: {
    fontFamily: 'Poppins-Bold',
    color: '#000',
  },
  ContIcon1: {
    flexDirection: 'row',
  },
  ContIcon2: {
    alignItems: 'center',
    marginRight: 20,
    marginVertical: 15,
  },
  namaGrup: {
    fontFamily: 'Poppins-SemiBold',
    color: '#000',
  },
});

export default Chat;
