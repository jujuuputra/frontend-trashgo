import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/SimpleLineIcons';
//Screen
import HeaderCamera from '../Header/HeaderCamera';
import bgTrashGO from '../../img/trashgoicon.svg';
const Camera = () => {
  return (
    <View style={styles.Page}>
      <HeaderCamera></HeaderCamera>
      <View style={styles.headerBelow}>
        <View style={styles.ContrashGO}>
          <Text style={styles.textTrash}>trash</Text>
          <Text style={styles.textGO}>GO</Text>
        </View>
      </View>
      <View style={styles.ConText}>
        <View>
          <Text style={styles.textLaporkan}>
            Laporkan dengan tahap-tahap berikut ini:
          </Text>
        </View>
        <View>
          <Text style={styles.textIsiLaporkan}>
            1. Foto tempat pembuangan sampah secara jelas
          </Text>
          <Text style={styles.textIsiLaporkan}>
            2. Anda telah selesai melaporkan.
          </Text>
        </View>
        <View style={styles.ContCam}>
          <Text style={styles.textLaporkan}>Tangkap Foto</Text>
          <TouchableOpacity style={styles.camera} onPress={() => {}}>
            <Icon name="camera-alt" color={'#fff'} size={120}></Icon>
          </TouchableOpacity>

          <TouchableOpacity style={styles.ContKirim} onPress={() => {}}>
            <View>
              <Icon2 name="camera" color={'#fff'} size={25}></Icon2>
            </View>
            <View style={styles.ContKirim2}>
              <Text style={styles.textKirim}>Buka Kamera</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.ContKirim3}>
            <Text style={styles.textKirim2}>Kirim Laporan</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Page: {
    flex: 1,
  },
  headerBelow: {
    backgroundColor: '#105263',
    height: 80,
  },
  ContrashGO: {
    flexDirection: 'row',
    marginHorizontal: 20,
  },
  textTrash: {
    color: '#fff',
    fontFamily: 'FutuBdIt',
    fontSize: 30,
  },
  textGO: {
    color: '#fff',
    fontFamily: 'FutuBd',
    fontSize: 30,
  },
  ConText: {
    alignItems: 'center',
    paddingTop: 20,
  },
  textLaporkan: {
    fontFamily: 'Poppins-SemiBold',
    color: '#105263',
  },
  textIsiLaporkan: {
    fontFamily: 'Poppins-Regular',
    color: '#105263',
    fontSize: 13,
  },
  camera: {
    height: 120,
    width: 120,
    backgroundColor: '#105263',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  ContCam: {
    alignItems: 'center',
    marginTop: 20,
  },
  ContKirim: {
    backgroundColor: '#105263',
    height: 40,
    width: 150,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  textKirim: {
    color: '#fff',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 12,
  },
  ContKirim2: {
    flex: 1,
    alignItems: 'center',
  },
  ContKirim3: {
    borderWidth: 2,
    height: 40,
    width: 300,
    borderColor: '#105263',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 60,
  },
  textKirim2: {
    color: '#105263',
    fontFamily: 'Poppins-SemiBold',
  },
});
export default Camera;
