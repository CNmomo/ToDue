import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import { setPool, setToday, setScheduled } from '../redux/screenSetterSlice'
import AsyncStorage from '@react-native-async-storage/async-storage';


const Settings = () => {
  const defaultScreen = useSelector(state => state.screenSetter.value);
  const dispatch = useDispatch();

  const storeDefaultScreen = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('defaultScreen', jsonValue);
      console.log('store');
    } catch (e) {
      console.log(e);
    }
  }


  return (
    <View>
      <Text>defaultScreen: {defaultScreen}</Text>
      <Button
        title="Pool"
        onPress={() => {
          dispatch(setPool());
          storeDefaultScreen('Pool');
        }}
      />
      <Button
        title="Today"
        onPress={() => {
          dispatch(setToday());
          storeDefaultScreen('Today');
        }}
      />
      <Button
        title="Scheduled"
        onPress={() => {
          dispatch(setScheduled());
          storeDefaultScreen('Scheduled');
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({})

export default Settings;
