import React, {useEffect} from 'react';
import {View, StyleSheet, Text} from 'react-native';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home');
    }, 2000);
  }, []);

  return (
    <View style={styles.body}>
      <Text>Loading...</Text>
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

export default Splash;
