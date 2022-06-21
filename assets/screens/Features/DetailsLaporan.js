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
import HeaderDetails from '../Header/HeaderDetails';

const DetailsLaporan = ({navigation}) => {
  const data = [
    {
      id: '1',
      status: 'Selesai',
      title: 'Pelaporan Sampah 24 Februari',
      desc: 'Laporan Anda diterima.',
      pelapor: 'Juju',
      lokasi: 'Jati Indah',
      kategori: 'TPS',
      tanggalPelaporan: '23 Februari 2022',
      tanggalPenjemputan: '24 Februari 2022',
    },
    // {
    //   id: '2',
    //   status: 'Gagal',
    //   title: 'Pelaporan Sampah 27 Februari',
    //   desc: 'Laporan Anda ditolak.',
    // },
    // {
    //   id: '3',
    //   status: 'Menunggu persetujuan',
    //   title: 'Pelaporan Sampah 29 Februari',
    //   desc: 'Terimakasih telah melaporkan tempat sampah yang sudah penuh.',
    // },
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
        <HeaderDetails />
      </View>

      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return (
            <View style={styles.ContPage}>
              <View style={styles.ContBox}>
                <View style={styles.ContIsiBox1}>
                  <Text style={styles.text2}>{item.title}</Text>
                  <View>
                    <View style={{flexDirection: 'row', marginBottom: 4}}>
                      <Text style={styles.text4}>Pelapor</Text>
                      <Text style={{marginHorizontal: 3}}>:</Text>
                      <Text style={styles.text3}>{item.pelapor}</Text>
                    </View>
                    <View style={{flexDirection: 'row', marginBottom: 4}}>
                      <Text style={styles.text4}>Lokasi</Text>
                      <Text style={{marginHorizontal: 3}}>:</Text>
                      <Text style={styles.text3}>{item.lokasi}</Text>
                    </View>
                    <View style={{flexDirection: 'row', marginBottom: 4}}>
                      <Text style={styles.text4}>Kategori</Text>
                      <Text style={{marginHorizontal: 3}}>:</Text>
                      <Text style={styles.text3}>{item.kategori}</Text>
                    </View>
                    <View style={{flexDirection: 'row', marginBottom: 4}}>
                      <Text style={styles.text4}>Tgl Laporan</Text>
                      <Text style={{marginHorizontal: 3}}>:</Text>
                      <Text style={styles.text3}>{item.tanggalPelaporan}</Text>
                    </View>
                    <View style={{flexDirection: 'row', marginBottom: 4}}>
                      <Text style={styles.text4}>Tgl Penjemputan</Text>
                      <Text style={{marginHorizontal: 3}}>:</Text>
                      <Text style={styles.text3}>
                        {item.tanggalPenjemputan}
                      </Text>
                    </View>
                    <View style={{flexDirection: 'row', marginBottom: 4}}>
                      <Text style={styles.text4}>Status</Text>
                      <Text style={{marginHorizontal: 3}}>:</Text>
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
                    </View>
                  </View>
                </View>
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
  ContPage: {
    alignItems: 'center',
  },
  text1: {
    fontFamily: 'Poppins-Medium',
  },
  text2: {
    fontFamily: 'Poppins-Bold',
    color: '#191D21',
  },
  text3: {
    fontFamily: 'Poppins-Regular',
    // color: '#656F77',
    color: '#191D21',
  },
  text4: {
    fontFamily: 'Poppins-Regular',
    // color: '#656F77',
    color: '#191D21',
    width: 120,
  },
  ContStatus1: {
    paddingHorizontal: 8,
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
  ContTextKet: {},
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

export default DetailsLaporan;
