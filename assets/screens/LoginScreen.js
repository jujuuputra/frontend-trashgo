import React, {useState, useEffect, createRef, Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Button,
  FlatList,
  Alert,
  ToastAndroid,
  BackHandler,
  StatusBar,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Image,
  ActivityIndicator,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Axios from 'axios';
// Import Image
import SampahImg from '../img/trashgoicon.svg';
import IconGoogle from '../img/icon-google.svg';
import IconFb from '../img/icon-facebook.svg';

const Stack = createNativeStackNavigator();

const Login = ({navigation}) => {
  const [emailUser, setEmailUser] = useState('');
  const [passwordUser, setPasswordUser] = useState('');
  const [userToken, setUserToken] = useState(null);
  const [handleError, setHandleError] = useState(false);

  function LoginHandle() {
    setHandleError(false);
    Axios.post('http://10.0.2.2:1234/auth/login', {
      email: emailUser,
      password: passwordUser,
    })
      .then(res => {
        console.log(res);
        setUserToken(res.data.token);
        AsyncStorage.setItem('sessionID', userToken);
        navigation.navigate('Tabs');
        setEmailUser('');
        setPasswordUser('');
        console.log(userToken);
      })
      .catch(error => {
        console.log(error);
        setHandleError(true);
      });
  }
  //END API

  //Back Handler

  useEffect(() => {
    const backAction = () => {
      Alert.alert('Perhatian', 'Apakah anda yakin ingin keluar aplikasi?', [
        {
          text: 'Cancel',
          onPress: () => null,
        },
        {
          text: 'OK',
          onPress: () => BackHandler.exitApp(),
        },
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);
  return (
    <KeyboardAwareScrollView
      style={styles.SAV}
      resetScrollToCoords={{x: 0, y: 0}}
      scrollEnabled={false}>
      <StatusBar translucent backgroundColor="transparent" />

      {/* Logo Aplikasi */}
      <View style={styles.containerLogo}>
        <View style={styles.containerTrashgo}>
          <Text style={styles.textTrash}>trash</Text>
          <Text style={styles.textGo}>GO</Text>
        </View>
        <View>
          <SampahImg height={200} width={250}></SampahImg>
        </View>
      </View>

      {/* Text Input */}
      <View>
        <Text style={styles.textInput}>Email</Text>
        <TextInput
          value={emailUser}
          style={styles.formInput}
          placeholder="Alamat Email"
          onChangeText={value => setEmailUser(value)}
          keyboardType={'email-address'}></TextInput>
        <Text style={styles.textInput}>Kata Sandi</Text>
        <TextInput
          value={passwordUser}
          style={styles.formInput}
          placeholder="Kata Sandi"
          onChangeText={value => setPasswordUser(value)}
          secureTextEntry={true}></TextInput>
        <TouchableOpacity
          onPress={() => navigation.navigate('ForgetPassword')}
          style={styles.containerLupa}>
          <Text style={styles.textLupa}>Lupa Kata Sandi?</Text>
        </TouchableOpacity>
      </View>

      {/* Button Masuk Dll */}

      <View style={styles.containerLupa}>
        {handleError ? (
          <Text style={styles.handleError}>Email atau password salah</Text>
        ) : null}
        <TouchableOpacity style={styles.buttonMasuk} onPress={LoginHandle}>
          <Text style={styles.textMasuk}>Masuk</Text>
        </TouchableOpacity>
        {/* <View style={styles.containerMasukDengan}>
          <Text style={styles.textMasukDengan}>Atau Masuk dengan</Text>
        </View>
        <View style={styles.containerIcon}>
          <TouchableOpacity style={styles.iconLogin}>
            <IconGoogle height={25} width={25}></IconGoogle>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconLogin}>
            <IconFb height={27} width={27}></IconFb>
          </TouchableOpacity>
        </View> */}
        <View style={styles.containerDaftar}>
          <Text style={styles.textBelum}>Belum memiliki akun?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.textDaftar}> Daftar</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Version */}
      <View style={styles.version}>
        <Text style={styles.textVersion}>1.0.0</Text>
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  version: {
    bottom: 0,
    marginTop: 40,
  },
  textVersion: {
    color: 'gray',
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
  },
  textBelum: {
    fontFamily: 'Poppins-Regular',
    color: '#fff',
  },
  textDaftar: {
    fontFamily: 'Poppins-SemiBold',
    textDecorationLine: 'underline',
    color: '#fff',
  },
  containerDaftar: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  containerIcon: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  iconLogin: {
    borderWidth: 2,
    borderColor: '#98BB66',
    height: 35,
    width: 35,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    marginTop: 5,
  },
  containerMasukDengan: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textMasuk: {
    fontFamily: 'FutuBd',
    color: '#0f9562',
  },
  textMasukDengan: {
    color: '#ffffff',
    marginTop: 10,
    fontSize: 12,
    fontFamily: 'Poppins-SemiBold',
    marginHorizontal: 40,
  },
  containerLupa: {
    marginTop: 5,
  },
  formInput: {
    marginHorizontal: 35,
    paddingHorizontal: 15,
    marginTop: 3,
    backgroundColor: '#fff',
    borderRadius: 5,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textInput: {
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 10,
    fontFamily: 'Poppins-SemiBold',
    fontSize: 13,
    marginHorizontal: 40,
  },

  buttonMasuk: {
    backgroundColor: '#98BB66',
    marginHorizontal: 35,
    paddingHorizontal: 15,
    marginTop: 3,
    borderRadius: 5,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#fff',
  },
  SAV: {
    flex: 1,
    backgroundColor: '#0f9562',
  },
  containerLogo: {
    paddingTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerTrashgo: {
    flexDirection: 'row',
  },
  textTrash: {
    color: '#fff',
    fontFamily: 'FutuBdIt',
    fontSize: 50,
  },
  textGo: {
    fontFamily: 'FutuBd',
    fontSize: 50,
    color: '#fff',
  },
  textLupa: {
    color: '#fff',
    textDecorationLine: 'underline',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 12,
    marginHorizontal: 40,
  },
  handleError: {
    color: 'red',
    marginLeft: 40,
  },
});

export default Login;
