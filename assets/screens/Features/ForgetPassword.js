import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Appbar} from 'react-native-paper';
import Icon from 'react-native-vector-icons';
import HeaderFPW from '../Header/HeaderFPW';
// import HeaderTrashgo from '../Header/HeaderTrashgo';

const ForgetPassword = ({navigation}) => {
  return (
    <SafeAreaView style={styles.SAV}>
      <HeaderFPW />
      <View style={styles.containerPage}>
        <View style={styles.containerTrashgo}>
          <Text style={styles.textTrash}>trash</Text>
          <Text style={styles.textGO}>GO</Text>
        </View>
        <Text style={styles.subText}>Reset Password</Text>
        <Text style={styles.subText2}>
          Masukkan alamat email yang kamu gunakan untuk mendaftar. Kami akan
          mengirim email berisi nama pengguna dan tautan untuk mereset kata
          sandi kepadamu.
        </Text>
        <View>
          <View style={styles.boxInput}>
            <Text style={styles.textInput}>Email</Text>
            <TextInput
              placeholder="Alamat Email"
              style={styles.formInput}></TextInput>
          </View>
        </View>
        <TouchableOpacity onPress={() => {}} style={styles.buttonSimpan}>
          <Text style={styles.textSimpan}>KIRIM</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  SAV: {
    backgroundColor: '#105263',
    flex: 1,
  },
  containerPage: {
    marginHorizontal: 15,
    marginVertical: 10,
  },
  Appbar: {
    backgroundColor: '#105263',
    marginTop: 20,
  },
  containerTrashgo: {
    flexDirection: 'row',
  },
  textTrash: {
    fontFamily: 'FutuBdIt',
    fontSize: 35,
    color: '#fff',
  },
  textGO: {
    fontFamily: 'FutuBd',
    fontSize: 35,
    color: '#fff',
  },
  subText: {
    color: '#fff',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
  },
  subText2: {
    color: '#fff',
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
  },
  formInput: {
    height: 40,
    width: 320,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 8,
    paddingLeft: 10,
  },
  textInput: {
    color: '#fff',
    fontFamily: 'Poppins-SemiBold',
  },
  boxInput: {
    marginTop: 50,
  },
  buttonSimpan: {
    marginTop: 70,
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    borderRadius: 8,
    height: 40,
    width: 320,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#fff',
  },
  textSimpan: {
    fontFamily: 'FutuBd',
    color: '#105263',
    fontSize: 16,
  },
});

export default ForgetPassword;
