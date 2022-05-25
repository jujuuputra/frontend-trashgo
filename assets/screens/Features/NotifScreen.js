import React, {useState, useEffect} from 'react';
import {Text, View, TouchableOpacity, StyleSheet, FlatList} from 'react-native';
import HeaderNotifikasi from '../Header/HeaderNotifikasi';
import Icon from 'react-native-vector-icons/MaterialIcons';
const NotifScreen = () => {
  const data = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Pelaporan Sampah 24 Februari',
      desc: 'Laporan Anda diterima.',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Pelaporan Sampah 27 Februari',
      desc: 'Laporan Anda ditolak.',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Pelaporan Sampah 29 Februari',
      desc: 'Terimakasih telah melaporkan tempat sampah yang sudah penuh.',
    },
  ];
  return (
    <View>
      <View>
        <HeaderNotifikasi />
      </View>

      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return (
            <View style={styles.ContPage}>
              <View style={styles.ContBox}>
                <View style={styles.ContIsiBox1}>
                  <View style={styles.ContStatus1}></View>
                  <Text style={styles.text2}>{item.title}</Text>
                  <View style={styles.ContTextKet}>
                    <Text
                      numberOfLines={2}
                      ellipsizeMode="tail"
                      style={styles.text3}>
                      {item.desc}
                    </Text>
                  </View>
                </View>
                <TouchableOpacity style={styles.ContIsiBox2} onPress={() => {}}>
                  <Icon name="arrow-forward-ios" size={25}></Icon>
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  ContBox: {
    marginTop: 10,
    width: 320,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: '#fff',
    padding: 5,
    paddingHorizontal: 8,
    flexDirection: 'row',
  },
  ContIsiBox1: {},
  ContIsiBox2: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  ContPage: {
    alignItems: 'center',
  },
  text1: {
    fontFamily: 'Poppins-Medium',
    fontSize: 8,
  },
  text2: {
    fontFamily: 'Poppins-Bold',
    fontSize: 14,
    color: '#191D21',
  },
  text3: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#656F77',
  },
  ContStatus1: {
    backgroundColor: '#FFF50F',
    paddingHorizontal: 8,
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
  ContStatus2: {
    backgroundColor: '#74D483',
    paddingHorizontal: 8,
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
  ContStatus3: {
    backgroundColor: '#FF7885',
    paddingHorizontal: 8,
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
  ContTextKet: {
    width: 250,
  },
});

export default NotifScreen;
