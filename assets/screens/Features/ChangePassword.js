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
// import HeaderTrashgo from '../Header/HeaderTrashgo';

const ChangePassword = ({navigation}) => {
  return (
    <SafeAreaView style={styles.SAV}>
      <Appbar.Header style={styles.Appbar}>
        {/* <Appbar.BackAction onPress={() => navigation.navigate('Profile')} /> */}
        <Appbar.Content
          title="Ganti Password"
          titleStyle={{
            fontFamily: 'Poppins-SemiBold',
          }}></Appbar.Content>
      </Appbar.Header>
      <View style={styles.containerPage}>
        <View style={styles.containerTrashgo}>
          <Text style={styles.textTrash}>trash</Text>
          <Text style={styles.textGO}>GO</Text>
        </View>
        <Text style={styles.subText}>Ganti Password</Text>
        <Text style={styles.subText2}>
          Masukkan email Anda dan password baru anda
        </Text>
        <View>
          <View style={styles.boxInput}>
            <Text style={styles.textInput}>Email</Text>
            <TextInput
              placeholder="Alamat Email"
              style={styles.formInput}></TextInput>
          </View>
          <View style={styles.boxInput}>
            <Text style={styles.textInput}>Password Baru</Text>
            <TextInput
              placeholder="Masukkan Password Baru"
              style={styles.formInput}></TextInput>
          </View>
          <View style={styles.boxInput}>
            <Text style={styles.textInput}>Konfirmasi Password Baru</Text>
            <TextInput
              placeholder="Konfirmasi Password Baru"
              style={styles.formInput}></TextInput>
          </View>
        </View>
        <TouchableOpacity onPress={() => {}} style={styles.buttonSimpan}>
          <Text style={styles.textSimpan}>Simpan Perubahan</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  SAV: {
    backgroundColor: '#0f9562',
    flex: 1,
  },
  containerPage: {
    marginHorizontal: 15,
    marginVertical: 10,
  },
  Appbar: {
    backgroundColor: '#0f9562',
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
    marginTop: 10,
  },
  buttonSimpan: {
    backgroundColor: '#0f9562',
    paddingHorizontal: 15,
    marginTop: 50,
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
    color: '#fff',
    fontSize: 16,
  },
});

export default ChangePassword;
