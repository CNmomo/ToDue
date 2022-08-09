import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

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
      />
      <Drawer.Screen
        name = "Today"
        component = {Today}
      />
      <Drawer.Screen
        name = "Scheduled"
        component = {Scheduled}
      />
      <Drawer.Screen
        name = "Settings"
        component = {Settings}
      />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({})

export default Home;
