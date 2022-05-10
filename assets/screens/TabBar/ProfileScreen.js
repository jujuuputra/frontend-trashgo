import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import {StackActions} from '@react-navigation/native';
import axios from 'axios';
//Screen
import HeaderAkun from '../Header/HeaderAkun';
const Profile = () => {
  const navigation = useNavigation();

  const [userInfo, setUserInfo] = useState();

  const getData = async () => {
    try {
      const res = await axios.get('http://10.0.2.2:3000/users', {
        params: {
          namaUser: 'Jujuu',
          emailUser: 'jujuu@email',
          passwordUser: 'juju123',
          nohpUser: '0852',
          id: 1,
        },
      });
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={styles.Cont}>
      <HeaderAkun></HeaderAkun>
      <View style={styles.settingCont}>
        <TouchableOpacity
          style={styles.settingIcon}
          onPress={() => navigation.navigate('SettingScreen')}>
          <Icon name="settings" size={25} />
        </TouchableOpacity>
      </View>
      <View style={styles.ContProf}>
        <View style={styles.PProfile}></View>
        <Text style={styles.textNama}>Juju</Text>
        <View style={styles.garis}></View>
        <Text style={styles.textBio}>Direktur</Text>
        <View style={styles.ContLoc}>
          <Icon name="location-on" size={20} color="#000"></Icon>
          <Text style={styles.textBio}>Jatiindah</Text>
        </View>
        <View>
          <View style={styles.ContProf2}>
            <Text style={styles.text1}>ID</Text>
            <View>
              <Text style={styles.text2}>123</Text>
            </View>
          </View>
          <View style={styles.garis}></View>
          <View style={styles.ContProf2}>
            <Text style={styles.text1}>Username</Text>
            <View>
              <Text style={styles.text2}>123</Text>
            </View>
          </View>
          <View style={styles.garis}></View>
          <View style={styles.ContProf2}>
            <Text style={styles.text1}>Email</Text>
            <View>
              <Text style={styles.text2}>juju@email</Text>
            </View>
          </View>
          <View style={styles.garis}></View>
          <View style={styles.ContProf2}>
            <Text style={styles.text1}>Alamat</Text>
            <View>
              <Text style={styles.text2}>Jatiindah</Text>
            </View>
          </View>
          <View style={styles.garis}></View>
          <View style={styles.ContProf2}>
            <Text style={styles.text1}>No.Telp</Text>
            <View>
              <Text style={styles.text2}>0852</Text>
            </View>
          </View>
          <View style={styles.garis}></View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Cont: {
    flex: 1,
  },
  ContProf: {
    alignItems: 'center',
    marginTop: 5,
  },
  PProfile: {
    width: 100,
    height: 100,
    borderRadius: 100,
    backgroundColor: '#d2d2d2',
  },
  textNama: {
    fontFamily: 'Poppins-Bold',
    color: '#191D21',
    marginTop: 10,
    fontSize: 18,
  },
  garis: {
    width: 320,
    marginHorizontal: 20,
    backgroundColor: '#d2d2d2',
    height: 1.5,
  },
  ContLoc: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBio: {
    color: '#000',
    marginHorizontal: 5,
  },
  ContProf2: {
    marginLeft: 20,
  },
  text1: {
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
    color: '#302E53',
  },
  text2: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
  },
  settingCont: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginTop: 10,
  },
  settingIcon: {flex: 1, alignItems: 'flex-end'},
});

export default Profile;