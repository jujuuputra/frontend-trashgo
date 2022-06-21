import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  Calendar,
  CalendarList,
  Agenda,
  LocaleConfig,
} from 'react-native-calendars';

import HeaderJadwal from '../Header/HeaderSchedule';

const ScheduleScreen = () => {
  return (
    <View style={{flex: 1}}>
      <HeaderJadwal />
      <Text style={styles.title}>JADWAL PENGANGKUTAN SAMPAH</Text>
      <View style={styles.calendar}>
        <Calendar></Calendar>
      </View>
    </View>
  );
};

export default ScheduleScreen;

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Poppins-SemiBold',
    color: '#105263',
    textAlign: 'center',
    marginTop: 20,
  },
  calendar: {
    width: 300,
    backgroundColor: '#d2d2d2',
    alignSelf: 'center',
  },
});
