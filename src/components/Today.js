import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { useSelector } from 'react-redux'; //TODO delete after testing redux

const Today = () => {
  const screenSet = useSelector(state => state.screenSetter.value) //TODO delete after testing redux

  return (
    <View>
      <Text>{screenSet}</Text>
    </View>
  );
}

const styles = StyleSheet.create({})

export default Today;
