import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {SafeAreaView} from 'react-native-safe-area-context';
import HeaderAkun from '../Header/HeaderAkun';
import Icon from 'react-native-vector-icons/MaterialIcons';
const Demo = () => {
  const [datprof, setDatprof] = useState({
    nama: 'M. Visa Ramadhan',
    username: 'mvisa.r',
    email: 'visa.r@gmail.com',
    id: '202204080001',
    alamat: 'Purwokerto',
    telephone: '0852',
    password: '123123',
  });
  return (
    <View>
      <View>
        <HeaderAkun />
      </View>
      <View style={{alignItems: 'center'}}>
        <ScrollView>
          {/* <View
            style={{
              height: 80,
              width: 300,
              backgroundColor: '#d2d2d2',
              margin: 15,
            }}>
            <Text>123345</Text>
          </View> */}
          <View style={styles.ContProf2}>
            <Text style={styles.text1}>ID</Text>
            <View>
              <Text style={styles.text2}>{datprof.id}</Text>
            </View>
          </View>
          <View style={styles.garis}></View>
          <View style={styles.ContProf2}>
            <Text style={styles.text1}>Username</Text>
            <View>
              <Text style={styles.text2}>{datprof.username}</Text>
            </View>
          </View>
          <View style={styles.garis}></View>
          <View style={styles.ContProf2}>
            <Text style={styles.text1}>Email</Text>
            <View>
              <Text style={styles.text2}>{datprof.email}</Text>
            </View>
          </View>
          <View style={styles.garis}></View>
          <View style={styles.ContProf2}>
            <Text style={styles.text1}>Alamat</Text>
            <View>
              <Text style={styles.text2}>{datprof.alamat}</Text>
            </View>
          </View>
          <View style={styles.garis}></View>
          <View style={styles.ContProf2}>
            <Text style={styles.text1}>No.Telp</Text>
            <View>
              <Text style={styles.text2}>{datprof.telephone}</Text>
            </View>
          </View>
          <View style={styles.garis}></View>
          <View style={styles.ContProf2}>
            <Text style={styles.text1}>Password</Text>
            <View>
              <Text style={styles.text2}>{datprof.password}</Text>
            </View>
          </View>
          <View style={styles.garis}></View>
        </ScrollView>
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
    marginTop: 20,
  },
  PProfile: {
    width: 120,
    height: 120,
    borderRadius: 120,
    backgroundColor: '#d2d2d2',
  },
  textNama: {
    fontFamily: 'Poppins-Bold',
    color: '#191D21',
    marginTop: 10,
    fontSize: 20,
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
});

export default Demo;

{
  /* <KeyboardAvoidingView style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <Text style={styles.header}>Header</Text>
          <TextInput placeholder="Username" style={styles.textInput} />
          <View style={styles.btnContainer}>
            <Button title="Submit" onPress={() => null} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView> */
}

//App JS
// import Home from './assets/screens/TabBar/HomeScreen';
// import Chat from './assets/screens/TabBar/ChatScreen';
// import Maps from './assets/screens/TabBar/MapsScreen';
// import Profile from './assets/screens/TabBar/ProfileScreen';
// import Tabs from './assets/screens/BotNavTabs';
// import Login from './assets/screens/LoginScreen';
// import SignUp from './assets/screens/SignUpScreen';
// import ChangePassword from './assets/screens/Features/ChangePassword';
// import ForgetPassword from './assets/screens/Features/ForgetPassword';
// import test from './assets/screens/Features/test';
// import HistoryScreen from './assets/screens/HistoryScreen';
//Image
// import SampahImg from './assets/img/trashgoicon.svg';

// //Start Application
// const Stack = createNativeStackNavigator();

// <NavigationContainer>
//   <Tabs />
// </NavigationContainer>
// <NavigationContainer>
//   <Stack.Navigator>
//     <Stack.Screen
//       name="Login"
//       component={Login}
//       options={{headerShown: false}}
//     />
//     <Stack.Screen
//       name="SignUp"
//       component={SignUp}
//       options={{headerShown: false}}
//     />
//     <Stack.Screen
//       name="ForgetPassword"
//       component={ForgetPassword}
//       options={{headerShown: false}}
//     />
//     <Stack.Screen
//       name="ChangePassword"
//       component={ChangePassword}
//       options={{headerShown: false}}
//     />
//     <Stack.Screen
//       name="Tabs"
//       component={Tabs}
//       options={{headerShown: false}}
//     />
//     <Stack.Screen
//       name="HistoryScreen"
//       component={HistoryScreen}
//       options={{headerShown: false}}
//     />
//   </Stack.Navigator>
// </NavigationContainer>

// const [datprof, setDatprof] = useState({
//   nama: 'M. Visa Ramadhan',
//   username: 'mvisa.r',
//   email: 'visa.r@gmail.com',
//   id: '202204080001',
//   alamat: 'Purwokerto',
//   telephone: '0852',
//   password: '123123',
// });
