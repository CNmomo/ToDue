import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { useDispatch } from 'react-redux';
import { setPool, setToday, setScheduled } from '../redux/screenSetterSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Splash from './Splash';
import Home from './Home';

const Stack = createStackNavigator();

const Root = () => {
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
        console.log("get")
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
}

const styles = StyleSheet.create({})

export default Root;

