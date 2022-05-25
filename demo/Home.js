// import React, {useEffect} from 'react';
// import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// const HomeDemo = ({navigation}) => {
//   const onLogout = async () => {
//     await AsyncStorage.removeItem('token');
//     navigation.navigate('LoginDemo');
//   };
//   return (
//     <View style={styles.container}>
//       <Text style={styles.judul}>Home Demo</Text>
//       <View>
//         <TouchableOpacity style={styles.button} onPress={onLogout}>
//           <Text style={styles.textButton}>Logout</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   judul: {
//     textAlign: 'center',
//     fontWeight: 'bold',
//     fontSize: 25,
//     color: '#000',
//     margin: 25,
//   },
//   button: {
//     width: 150,
//     height: 40,
//     backgroundColor: '#116e11',
//     borderRadius: 5,
//     justifyContent: 'center',
//   },
//   textButton: {
//     color: '#000',
//     textAlign: 'center',
//     fontSize: 17,
//   },
// });
// export default HomeDemo;
