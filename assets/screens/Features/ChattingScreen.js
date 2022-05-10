import {NavigationContainer} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import HeaderChatting from '../Header/HeaderChatting';
const ChattingScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View>
        <HeaderChatting />
      </View>
      <TouchableOpacity
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 30, fontWeight: 'bold'}}>Chatting Screen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ChattingScreen;
