import React, {useEffect, useState} from 'react';
import Axios from 'axios';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const LoginDemo = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  const onSubmit = async () => {
    await AsyncStorage.setItem('token', username + Math.random());
    Axios.post('https://reqres.in/api/login', {
      email: username,
      password: password,
    })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
    if (username && password) {
      console.log('Nice');
      navigation.navigate('HomeDemo');
    } else {
      Alert.alert('Warning', 'Incorrect username or password');
    }
  };

  const tokenlogin = async () => {
    const valueToken = await AsyncStorage.getItem('token');
    if (valueToken != null) {
      navigation.navigate('HomeDemo');
    } else {
      Alert.alert('Warning', 'Please login first!');
    }
  };
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.judul}>Login Demo</Text>
        <TextInput
          style={styles.inputan}
          placeholder="Usename"
          value={username}
          onChangeText={value => setUsername(value)}
        />
        <TextInput
          style={styles.inputan}
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={value => setPassword(value)}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={onSubmit}>
        <Text style={styles.textButton}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputan: {
    backgroundColor: '#d2d2d2',
    width: 200,
    height: 40,
    paddingLeft: 10,
    marginBottom: 10,
  },
  judul: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25,
    color: '#000',
    margin: 25,
  },
  button: {
    width: 150,
    height: 40,
    backgroundColor: '#116e11',
    borderRadius: 5,
    justifyContent: 'center',
  },
  textButton: {
    color: '#000',
    textAlign: 'center',
    fontSize: 17,
  },
});

export default LoginDemo;
