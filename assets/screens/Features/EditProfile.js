import {useNavigation} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Switch} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HeaderEditProfile from '../Header/HeaderEditProfile';
const EditProfile = () => {
  const navigation = useNavigation();

  const [userInfo, setUserInfo] = useState({
    fullname: 'Juju Putra',
    username: 'jujuputra123',
    email: 'jujuputra@gmail.com',
    desc: 'A mobile developer',
  });

  return (
    <View style={styles.page}>
      <HeaderEditProfile />
      <View style={styles.inPage}>
        {/* Account */}
        <Text style={styles.textSubJudul}>Public</Text>
        <View style={styles.boxPilihan}>
          <Text style={styles.flex}>Full Name</Text>
          <Text style={{flex: 0.5}}>{userInfo.fullname}</Text>
          <TouchableOpacity>
            <Icon name="navigate-next" size={25} />
          </TouchableOpacity>
        </View>
        <View style={styles.boxPilihan}>
          <Text style={styles.flex}>Username</Text>
          <Text style={{flex: 0.5}}>{userInfo.username}</Text>
          <TouchableOpacity>
            <Icon name="navigate-next" size={25} />
          </TouchableOpacity>
        </View>
        <View style={styles.boxPilihan}>
          <Text style={styles.flex}>Email</Text>
          <Text style={{flex: 0.5}}>{userInfo.email}</Text>
          <TouchableOpacity>
            <Icon name="navigate-next" size={25} />
          </TouchableOpacity>
        </View>
        <View style={styles.boxPilihan}>
          <Text style={styles.flex}>Desc</Text>
          <Text style={{flex: 0.5}}>{userInfo.desc}</Text>
          <TouchableOpacity>
            <Icon name="navigate-next" size={25} />
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <TouchableOpacity
            style={{
              padding: 10,
              borderWidth: 1,
              borderColor: '#105263',
              marginHorizontal: 50,
              borderRadius: 5,
              width: 80,
            }}>
            <Text style={{textAlign: 'center'}}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              padding: 10,
              borderWidth: 1,
              borderColor: '#105263',
              marginHorizontal: 50,
              borderRadius: 5,
              width: 80,
            }}>
            <Text style={{textAlign: 'center'}}>Save</Text>
          </TouchableOpacity>
        </View>
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
    flex: 0.5,
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    color: '#000',
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
export default EditProfile;
