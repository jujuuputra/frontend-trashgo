import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const HeaderAkun = () => {
  return (
    <View>
      <View style={styles.header}>
        {/* <TouchableOpacity>
          <Icon name="arrow-back" size={25} color="#fff"></Icon>
        </TouchableOpacity> */}

        <View style={{flex: 1, alignItems: 'flex-end'}}>
          <Text style={styles.headerFont}>Akun</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#105263',
    height: 80,
    flexDirection: 'row',
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  headerFont: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: '#fff',
  },
});
export default HeaderAkun;
