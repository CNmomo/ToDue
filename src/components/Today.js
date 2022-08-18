import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { useSelector } from 'react-redux'; //TODO delete after testing redux

const Today = () => {
  const defaultScreen = useSelector(state => state.screenSetter.value) //TODO delete after testing redux

  let timeID = useSelector(state => state.timer.value)
  return (
    <View style={styles.body}>
      <Text>{timeID}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  body:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export default Today;
