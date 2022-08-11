import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useSelector, useDispatch } from 'react-redux';
import { setPool, setToday, setScheduled } from '../redux/screenSetterSlice'
import AsyncStorage from '@react-native-async-storage/async-storage';


import Pool from './Pool';
import Today from './Today';
import Scheduled from './Scheduled';
import Settings from './Settings';

const Drawer = createDrawerNavigator();

const Home = () => {
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

  const defaultScreen = useSelector(state => state.screenSetter.value);
  console.log({defaultScreen});

  useEffect(() => {
    getDefaultScreen();
  }, []);

  return (
    <Drawer.Navigator
      initialRouteName = {defaultScreen}
    >
      <Drawer.Screen
        name="Pool"
        component={Pool}
        options={{
          drawerIcon: () => {
            return (
              <MaterialIcons name="description" color={'#000000'} size={24} />
            );
          },
          //TODO change icon
        }}
      />
      <Drawer.Screen
        name="Today"
        component={Today}
        options={{
          drawerIcon: () => {
            return <MaterialIcons name="home" color={'#000000'} size={24} />;
          },
          //TODO change icon
        }}
      />
      <Drawer.Screen
        name="Scheduled"
        component={Scheduled}
        options={{
          drawerIcon: () => {
            return <MaterialIcons name="today" color={'#000000'} size={24} />;
          },
          //TODO change icon
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={Settings}
        options={{
          drawerItemStyle: {
            borderTopWidth: 1,
            borderColor: '#E2E4E8',
          },
          drawerIcon: () => {
            return (
              <MaterialIcons name="settings" color={'#000000'} size={24} />
            );
          },
          //TODO change icon
        }}
      />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({})

export default Home;
