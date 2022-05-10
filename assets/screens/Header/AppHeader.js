import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const AppHeader = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.Hheader}>
        <View style={styles.HContText}>
          <Text style={styles.HtextTrash}>trash</Text>
          <Text style={styles.HtextGo}>GO</Text>
        </View>
        <View style={styles.HiconBell}>
          <TouchableOpacity onPress={() => navigation.navigate('NotifScreen')}>
            <Icon name="bell" size={25} color="#fff"></Icon>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Hheader: {
    backgroundColor: '#105263',
    height: 80,
    flexDirection: 'row',
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  HtextTrash: {
    fontFamily: 'FutuBdIt',
    fontSize: 24,
    color: '#fff',
  },
  HtextGo: {
    fontFamily: 'FutuBd',
    fontSize: 24,
    color: '#fff',
  },
  HContText: {
    flexDirection: 'row',
  },
  HiconBell: {
    flex: 1,
    alignItems: 'flex-end',
  },
});

export default AppHeader;
