import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Date from './Date';

const Today = () => {

  return (
    <View style={styles.body}>
      <Date style={styles.date}/>
    </View>
  );
}

const styles = StyleSheet.create({
  body:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  date:{
    flex:1,
  },
})

export default Today;
