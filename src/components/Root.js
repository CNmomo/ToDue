import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { useDispatch } from 'react-redux';
import { setPool, setToday, setScheduled } from '../redux/screenSetterSlice';
import { setTime } from '../redux/timerSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Splash from './Splash';
import Home from './Home';

const Stack = createStackNavigator();

const Root = () => {
  const dispatch = useDispatch();

  const getDefaultScreen = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('defaultScreen');
      if (jsonValue != null) {
        const value = JSON.parse(jsonValue);
        if (value === "Pool") {
          dispatch(setPool());
        } else if (value === 'Today') {
          dispatch(setToday());
        } else if (value === 'Scheduled') {
          dispatch(setScheduled());
        }
        console.log("get");
      }
    } catch (e) {
      console.log(e);
    }
  };

  const initializeTime = () => {
    //console.log(new Date(2022, 0, 1))
    let currentTime = Date();
    let timeID = currentTime.split(" ");
    timeID = timeID.slice(0, 5);
    dispatch(setTime(timeID));
  };

  useEffect(() => {
    getDefaultScreen();
    initializeTime();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default Root;
