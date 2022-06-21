import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  PermissionsAndroid,
  ToastAndroid,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/SimpleLineIcons';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
//Screen
import HeaderCamera from '../Header/HeaderCamera';
import bgTrashGO from '../../img/trashgoicon.svg';

const Camera = () => {
  const [imageCamera, setImageCamera] = useState(null);
  const [accessCamera, setAccessCamera] = useState(null);
  const [keterangan, setKeterangan] = useState('');

  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'App Camera Permission',
          message: 'App needs access to your camera ',
          buttonNeutral: 'Nanti',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Camera permission given');
        return setAccessCamera(1);
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const openCamera = () => {
    const option = {
      mediaType: 'photo',
      quality: 1,
    };
    launchCamera(option, res => {
      if (res.didCancel) {
        console.log('User Canceled');
      } else if (res.errorMessage) {
        console.log(res.errorMessage);
      } else {
        const data = res.assets[0];
        setImageCamera(data);
        console.log(data);
      }
    });
  };

  function removeImage() {
    setImageCamera(null);
  }

  const buttonKirim = () => {
    setImageCamera(null);
    setKeterangan('');

    ToastAndroid.show('Laporan telah terkirim', ToastAndroid.SHORT);
  };

  return (
    <KeyboardAwareScrollView style={styles.Page}>
      <HeaderCamera></HeaderCamera>
      <View style={styles.headerBelow}>
        <View style={styles.ContrashGO}>
          <Text style={styles.textTrash}>trash</Text>
          <Text style={styles.textGO}>GO</Text>
        </View>
      </View>
      <View style={styles.ConText}>
        {imageCamera != null ? null : (
          <View>
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
          </View>
        )}
        <View style={styles.ContCam}>
          {imageCamera != null ? (
            <Image
              source={{uri: imageCamera.uri}}
              style={{height: 200, width: 200}}
            />
          ) : (
            <View>
              <Text style={styles.textLaporkan}>Tangkap Foto</Text>
              <TouchableOpacity style={styles.camera} onPress={() => {}}>
                <Icon name="camera-alt" color={'#fff'} size={120}></Icon>
              </TouchableOpacity>
            </View>
          )}

          {imageCamera != null ? (
            <TouchableOpacity style={styles.ContKirim} onPress={removeImage}>
              <View style={styles.ContKirim2}>
                <Text style={styles.textKirim}>Hapus Gambar</Text>
              </View>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.ContKirim}
              onPress={
                accessCamera != null ? openCamera : requestCameraPermission
              }>
              <View>
                <Icon2 name="camera" color={'#fff'} size={25}></Icon2>
              </View>
              <View style={styles.ContKirim2}>
                <Text style={styles.textKirim}>Buka Kamera</Text>
              </View>
            </TouchableOpacity>
          )}
        </View>
      </View>
      {imageCamera != null ? (
        <View style={{marginHorizontal: 20}}>
          <Text>Keterangan:</Text>
          <TextInput
            value={keterangan}
            style={{borderWidth: 1}}
            multiline={true}
            numberOfLines={3}
            placeholder={'Tulis keterangan'}
            onChangeText={text => setKeterangan(text)}></TextInput>
        </View>
      ) : null}
      {imageCamera != null ? (
        <TouchableOpacity style={styles.ContKirim3} onPress={buttonKirim}>
          <Text style={styles.textKirim2}>Kirim Laporan</Text>
        </TouchableOpacity>
      ) : null}
    </KeyboardAwareScrollView>
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
    paddingTop: 10,
  },
  textLaporkan: {
    fontFamily: 'Poppins-SemiBold',
    color: '#105263',
    textAlign: 'center',
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
    marginTop: 10,
  },
  ContKirim: {
    backgroundColor: '#105263',
    height: 40,
    width: 150,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  textKirim: {
    color: '#fff',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 12,
    textAlign: 'center',
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
    alignSelf: 'center',
    marginTop: 15,
    //   position: 'absolute',
    //   bottom: 100,
    //   right: 30,
    //   left: 30,
  },
  textKirim2: {
    color: '#105263',
    fontFamily: 'Poppins-SemiBold',
  },
});
export default Camera;
