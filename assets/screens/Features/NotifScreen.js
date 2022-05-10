import React, {useState, useEffect} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import HeaderNotifikasi from '../Header/HeaderNotifikasi';
import Icon from 'react-native-vector-icons/MaterialIcons';
const NotifScreen = () => {
  const [date, setDate] = useState({
    tanggal: '24',
    bulan: 'Februari',
  });
  return (
    <View>
      <View>
        <HeaderNotifikasi />
      </View>

      <View style={styles.ContPage}>
        <View style={styles.ContBox}>
          <View style={styles.ContIsiBox1}>
            <View style={styles.ContStatus1}></View>
            <Text style={styles.text2}>
              Pelaporan Sampah {date.tanggal} {date.bulan}
            </Text>
            <View style={styles.ContTextKet}>
              <Text numberOfLines={2} ellipsizeMode="tail" style={styles.text3}>
                Terimakasih telah melaporkan tempat sampah yang sudah penuh.
              </Text>
            </View>
          </View>
          <TouchableOpacity style={styles.ContIsiBox2} onPress={() => {}}>
            <Icon name="arrow-forward-ios" size={25}></Icon>
          </TouchableOpacity>
        </View>
        <View style={styles.ContBox}>
          <View style={styles.ContIsiBox1}>
            <Text style={styles.text2}>
              Pelaporan Sampah {date.tanggal} {date.bulan}
            </Text>
            <View style={styles.ContTextKet}>
              <Text numberOfLines={2} ellipsizeMode="tail" style={styles.text3}>
                Laporan Anda telah kami terima.
              </Text>
            </View>
          </View>
          <TouchableOpacity style={styles.ContIsiBox2} onPress={() => {}}>
            <Icon name="arrow-forward-ios" size={25}></Icon>
          </TouchableOpacity>
        </View>
        <View style={styles.ContBox}>
          <View style={styles.ContIsiBox1}>
            <Text style={styles.text2}>
              Pelaporan Sampah {date.tanggal} {date.bulan}
            </Text>
            <View style={styles.ContTextKet}>
              <Text numberOfLines={2} ellipsizeMode="tail" style={styles.text3}>
                Laporan Anda tidak diterima.
              </Text>
            </View>
          </View>
          <TouchableOpacity style={styles.ContIsiBox2} onPress={() => {}}>
            <Icon name="arrow-forward-ios" size={25}></Icon>
          </TouchableOpacity>
        </View>
      </View>
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
