// import React, {useState} from 'react';
// import {
//   Text,
//   View,
//   StyleSheet,
//   Button,
//   FlatList,
//   TouchableOpacity,
//   Image,
// } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialIcons';

// const RpptKonfirm = function ({navigation}) {
//   const [data, setData] = useState({
//     nama: 'Shyfanaya Aulia',
//     posisi: 'AI-HACKER',
//     sksMaks: '10',
//     sksTempuh: '8',
//     sksSisa: '2',
//     status: 'TELAH DISETUJUI ADMIN',
//     catatan: 'silahkan download RPPT',
//   });
//   const course = [
//     {
//       id: 'ds',
//       course: 'Data Science B (3 SKS)',
//     },
//     {
//       id: 'ml',
//       course: 'Machine Learning (2 SKS)',
//     },
//     {
//       id: 'bd',
//       course: 'Bisnis Digital (3 SKS)',
//     },
//   ];
//   return (
//     <View style={styles.container}>
//       <View
//         style={{
//           flexDirection: 'row',
//           paddingHorizontal: 15,
//           paddingVertical: 10,
//           borderBottomWidth: 0.5,
//           borderBottomColor: '#a9a9a9',
//           elevation: 2,
//         }}>
//         <TouchableOpacity onPress={() => {}}>
//           <Icon name="arrow-back" size={25} color={'#000'} />
//         </TouchableOpacity>
//         <View style={{flex: 1, alignItems: 'center'}}>
//           <Text
//             style={{
//               fontFamily: 'Poppins-Bold',
//               fontSize: 18,
//               color: '#000',
//             }}>
//             RPPT
//           </Text>
//         </View>
//       </View>
//       <View style={styles.containerPage}>
//         <Image source={require('../assets/konfirmasi.png')} />
//         <Text
//           style={{color: 'blue', fontSize: 16, fontFamily: 'Poppins-SemiBold'}}>
//           Menunggu Konfirmasi Admin
//         </Text>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   containerPage: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     flex: 1,
//     backgroundColor: '#fff',
//   },
// });

// export default RpptKonfirm;
