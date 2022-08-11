import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import { setPool, setToday, setScheduled } from '../redux/screenSetterSlice'


const Settings = () => {
  const screenSet = useSelector(state => state.screenSetter.value)
  const dispatch = useDispatch()



  return (
    <View>
      <Text>{screenSet}</Text>
      <Button
        title="Pool"
        onPress={() => dispatch(setPool())}
      />
      <Button
        title="Today"
        onPress={() => dispatch(setToday())}
      />
      <Button
      title="Scheduled"
      onPress={() => dispatch(setScheduled())}
      />
    </View>
  );
}

const styles = StyleSheet.create({})

export default Settings;
