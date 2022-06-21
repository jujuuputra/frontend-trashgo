import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HeaderLaporan from '../Header/HeaderLaporan';

const LaporanScreen = ({navigation}) => {
  const data = [
    {
      id: '1',
      status: 'Selesai',
      title: 'Pelaporan Sampah 24 Februari',
      desc: 'Laporan Anda diterima.',
    },
    {
      id: '2',
      status: 'Gagal',
      title: 'Pelaporan Sampah 27 Februari',
      desc: 'Laporan Anda ditolak.',
    },
    {
      id: '3',
      status: 'Menunggu persetujuan',
      title: 'Pelaporan Sampah 29 Februari',
      desc: 'Terimakasih telah melaporkan tempat sampah yang sudah penuh.',
    },
  ];

  const statusLaporan = value => {
    if (value == 'Selesai') {
      return 1;
    }

    if (value == 'Gagal') {
      return 2;
    }

    if (value == 'Menunggu persetujuan') {
      return 3;
    }
  };

  return (
    <View>
      <View>
        <HeaderLaporan />
      </View>

      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return (
            <View style={styles.ContPage}>
              <View style={styles.ContBox}>
                <View style={styles.ContIsiBox1}>
                  <View
                    style={[
                      statusLaporan(item.status) == 1
                        ? styles.berhasilBcc
                        : styles.ContStatus1,
                      statusLaporan(item.status) == 2
                        ? styles.gagalBcc
                        : styles.ContStatus1,
                      statusLaporan(item.status) == 3
                        ? styles.waitBcc
                        : styles.ContStatus1,
                      styles.ContStatus1,
                    ]}>
                    <Text
                      style={[
                        statusLaporan(item.status) == 1
                          ? styles.berhasilBcc
                          : styles.text1,
                        statusLaporan(item.status) == 2
                          ? styles.gagalBcc
                          : styles.text1,
                        statusLaporan(item.status) == 3
                          ? styles.waitBcc
                          : styles.text1,
                        styles.text1,
                      ]}>
                      {item.status}
                    </Text>
                  </View>
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
                <TouchableOpacity
                  style={styles.ContIsiBox2}
                  onPress={() =>
                    navigation.navigate('DetailsLaporan', {id: item.id})
                  }>
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
    fontSize: 9,
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
    paddingHorizontal: 8,
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
  ContTextKet: {
    width: 250,
  },
  berhasilBcc: {
    backgroundColor: '#74D483',
    // color: '#027915',
  },
  gagalBcc: {
    backgroundColor: '#FF7885',
    // color: '#D40808',
  },
  waitBcc: {
    backgroundColor: '#FFF50F',
    // color: '#D2AE2C',
  },
});

export default LaporanScreen;
