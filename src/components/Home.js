import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Pool from './Pool';
import Today from './Today';
import Scheduled from './Scheduled';
import Settings from './Settings';

const Drawer = createDrawerNavigator();

const Home = () => {

  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name = "Pool"
        component = {Pool}
        options = {{
          drawerIcon:()=>{return(<MaterialIcons  name="description" color={'#000000'} size={24} />)},
          //TODO change icon
        }}
      />
      <Drawer.Screen
        name = "Today"
        component = {Today}
        options = {{
          drawerIcon:()=>{return(<MaterialIcons  name="home" color={'#000000'} size={24} />)},
          //TODO change icon
        }}
      />
      <Drawer.Screen
        name = "Scheduled"
        component = {Scheduled}
        options = {{
          drawerIcon:()=>{return(<MaterialIcons  name="today" color={'#000000'} size={24} />)},
          //TODO change icon
        }}
      />
      <Drawer.Screen
        name = "Settings"
        component = {Settings}
        options ={{
          drawerItemStyle: {
            borderTopWidth: 1,
            borderColor: '#E2E4E8',
          },
          drawerIcon:()=>{return(<MaterialIcons  name="settings" color={'#000000'} size={24} />)},
          //TODO change icon
        }}
      />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({})

export default Home;
