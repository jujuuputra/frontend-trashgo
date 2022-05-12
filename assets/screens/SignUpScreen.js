import React, {useState, useEffect} from 'react';
import {AppRegistry} from 'react-native';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  StatusBar,
  ToastAndroid,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Checkbox} from 'react-native-paper';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
//Import Screen
import Axios from 'axios';
//Mulai Aplikasi
//Batas Const

const SignUp = ({navigation}) => {
  const [namaUser, setNamaUser] = useState('');
  const [emailUser, setEmailUser] = useState('');
  const [password, setPassword] = useState('');
  const [noHp, setNoHp] = useState('');
  const [checked, setChecked] = useState(false);
  const buttonDaftar = () => {
    if (namaUser && emailUser && password && noHp) {
      const data = {
        nama_user: namaUser,
        email: emailUser,
        password: password,
        alamat: noHp,
      };
      Axios.post('http://10.0.2.2:1234/api/register', data)
        .then(res => {
          console.log('res', res.data);
          setNamaUser('');
          setEmailUser('');
          setPassword('');
          setNoHp('');
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      Alert.alert('Warning', 'Silahkan isi dengan benar');
    }
  };

  return (
    <KeyboardAwareScrollView
      style={styles.SAV}
      resetScrollToCoords={{x: 0, y: 0}}
      scrollEnabled={false}>
      <StatusBar translucent backgroundColor="transparent" />
      <View>
        <View style={styles.containerTrashGo}>
          <Text style={styles.trashGo}>trash</Text>
          <Text style={[styles.trashGo, {fontFamily: 'FutuBd'}]}>GO</Text>
        </View>
        <Text style={styles.textpenjelasan}>Buat Akun Trash Go Mu</Text>
        <Text style={styles.textpenjelasan}>Sekarang</Text>
      </View>

      <View style={styles.containerInput}>
        <View style={styles.formInput}>
          <Icon name="person" size={25} color={'#105263'}></Icon>
          <TextInput
            placeholder="Nama"
            style={styles.textInput}
            value={namaUser}
            onChangeText={namaUser => setNamaUser(namaUser)}></TextInput>
        </View>
        <View style={styles.formInput}>
          <Icon name="alternate-email" size={25} color={'#105263'}></Icon>
          <TextInput
            placeholder="Email"
            style={styles.textInput}
            value={emailUser}
            onChangeText={emailUser => setEmailUser(emailUser)}></TextInput>
        </View>
        <View style={styles.formInput}>
          <Icon name="lock" size={25} color={'#105263'}></Icon>
          <TextInput
            placeholder="Kata Sandi"
            style={styles.textInput}
            value={password}
            onChangeText={password => setPassword(password)}
            secureTextEntry={true}></TextInput>
        </View>
        <View style={styles.formInput}>
          <Icon name="smartphone" size={25} color={'#105263'}></Icon>
          <TextInput
            placeholder="No.Handphone"
            style={styles.textInput}
            value={noHp}
            onChangeText={noHp => setNoHp(noHp)}></TextInput>
        </View>
      </View>

      <View style={styles.checkbox}>
        <Checkbox
          status={checked ? 'checked' : 'unchecked'}
          onPress={() => {
            setChecked(!checked);
          }}
        />
        <Text style={styles.textCheckBox}>
          Saya setuju dengan Syarat & Ketentuan serta Kebijakan Privasi
        </Text>
      </View>

      <View style={styles.containerInput}>
        <TouchableOpacity onPress={buttonDaftar}>
          <View style={styles.boxDaftar}>
            <Text style={styles.textDaftar}>Daftar</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.punyaAkunContainer}>
          <Text style={styles.punyaAkun}>Sudah punya akun?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={[styles.punyaAkun, {fontFamily: 'Poppins-SemiBold'}]}>
              {' '}
              Masuk
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  textpenjelasan: {
    color: '#fff',
    marginHorizontal: 20,
    fontSize: 22,
    fontFamily: 'FutuBd',
    marginVertical: 2,
  },

  trashGo: {
    color: '#fff',
    fontFamily: 'FutuBdIt',
    fontSize: 35,
  },
  containerTrashGo: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: 35,
    marginBottom: 20,
  },
  formInput: {
    height: 40,
    width: 320,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 8,
    paddingLeft: 10,
    marginVertical: 8,
  },
  containerInput: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  textInput: {
    width: 270,
  },
  checkbox: {
    flexDirection: 'row',
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 22,
    marginVertical: 15,
  },
  textCheckBox: {
    color: '#ffffff',
    fontFamily: 'Poppins-Regular',
    fontSize: 11,
  },
  textDaftar: {
    color: '#ffffff',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
  },
  boxDaftar: {
    height: 40,
    width: 320,
    borderWidth: 2,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#ffffff',
    marginVertical: 10,
  },

  punyaAkun: {
    color: '#ffffff',
  },
  punyaAkunContainer: {
    flexDirection: 'row',
  },
  SAV: {
    flex: 1,
    backgroundColor: '#105263',
  },
});
export default SignUp;
