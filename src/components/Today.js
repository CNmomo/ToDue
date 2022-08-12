import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { useSelector } from 'react-redux'; //TODO delete after testing redux

const Today = () => {
  const defaultScreen = useSelector(state => state.screenSetter.value) //TODO delete after testing redux

  return (
    <View style={styles.body}>
      <Text>defaultScreen: {defaultScreen}</Text>
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
