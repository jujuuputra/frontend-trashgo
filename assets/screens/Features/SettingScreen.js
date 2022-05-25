import {useNavigation} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Switch} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HeaderSetting from '../Header/HeaderSetting';
import AsyncStorage from '@react-native-async-storage/async-storage';
const SettingScreen = () => {
  const navigation = useNavigation();
  const [isEnabled, setIsEnabled] = useState(false);
  const switchToggle = () => {
    setIsEnabled(isEnabled => !isEnabled);
  };
  const [isEnabled2, setIsEnabled2] = useState(false);
  const switchToggle2 = () => {
    setIsEnabled2(isEnabled2 => !isEnabled2);
  };

  const logout = async () => {
    await AsyncStorage.removeItem('sessionID');
    navigation.navigate('Login');
  };

  return (
    <View style={styles.page}>
      <HeaderSetting />
      <View style={styles.inPage}>
        {/* Account */}
        <Text style={styles.textSubJudul}>Account</Text>
        <View style={styles.boxPilihan}>
          <Text style={styles.flex}>Edit Profile</Text>
          <TouchableOpacity onPress={() => navigation.navigate('EditProfile')}>
            <Icon name="navigate-next" size={25} />
          </TouchableOpacity>
        </View>
        <View style={styles.boxPilihan}>
          <Text style={styles.flex}>Change Password</Text>
          <TouchableOpacity>
            <Icon name="navigate-next" size={25} />
          </TouchableOpacity>
        </View>
        <View style={styles.boxPilihan}>
          <Text style={styles.flex}>Language</Text>
          <TouchableOpacity>
            <Icon name="navigate-next" size={25} />
          </TouchableOpacity>
        </View>
        <View style={styles.boxPilihan}>
          <Text style={styles.flex}>Privacy and Security</Text>
          <TouchableOpacity>
            <Icon name="navigate-next" size={25} />
          </TouchableOpacity>
        </View>
        {/* Notifikasi */}
        <Text style={styles.textSubJudul}>Notifications</Text>
        <View style={styles.boxPilihan}>
          <Text style={styles.flex}>News</Text>
          <Switch
            value={isEnabled}
            onValueChange={switchToggle}
            thumbColor={isEnabled ? '#fff' : '#fff'}
            trackColor={{false: '#a5a5a5', true: '#105263'}}
          />
        </View>
        <View style={styles.boxPilihan}>
          <Text style={styles.flex}>Account Activity</Text>
          <Switch
            value={isEnabled2}
            onValueChange={switchToggle2}
            thumbColor={isEnabled2 ? '#fff' : '#fff'}
            trackColor={{false: '#a5a5a5', true: '#105263'}}
          />
        </View>

        <TouchableOpacity style={styles.buttonSignOut} onPress={logout}>
          <Text style={styles.textSignOut}>SIGN OUT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#fff',
  },
  inPage: {
    marginHorizontal: 15,
    marginTop: 20,
  },
  boxPilihan: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#d2d2d2',
    paddingHorizontal: 10,
    paddingVertical: 7,
    marginTop: 5,
    marginBottom: 10,
    borderRadius: 3,
  },
  flex: {
    flex: 1,
  },
  textSubJudul: {
    fontFamily: 'Poppins-Regular',
    fontSize: 18,
    marginTop: 20,
    color: '#105263',
  },
  buttonSignOut: {
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#105263',
    height: 40,
    width: 120,
    marginTop: 30,
    borderRadius: 10,
  },
  textSignOut: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: '#105263',
  },
});
export default SettingScreen;
