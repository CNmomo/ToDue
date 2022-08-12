import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { useSelector, useDispatch } from 'react-redux';
import { setPool, setToday, setScheduled } from '../redux/screenSetterSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';


import Home from './Home';

const Stack = createStackNavigator();

const Root = () => {
  const defaultScreen = useSelector(state => state.screenSetter.value);
  const dispatch = useDispatch();

  const getDefaultScreen = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('defaultScreen');
      if (jsonValue != null){
        const value =  JSON.parse(jsonValue)
        if(value === 'Pool'){
          dispatch(setPool());
        }
        else if(value === 'Today'){
          dispatch(setToday());
        }
        else if(value === 'Scheduled'){
          dispatch(setScheduled());
        }
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getDefaultScreen();
  }, []);

  return (
    <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({})

export default Root;

