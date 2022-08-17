import React from 'react';
import { StyleSheet } from 'react-native';
import store from './src/redux/store';
import { Provider } from 'react-redux';

import Root from './src/components/Root';

const App = () => {
  return (
    <Provider store={store}>
      <Root />
    </Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
