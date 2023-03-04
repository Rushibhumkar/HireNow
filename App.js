import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainFile from './src/MainFile';
import Screens from './src/threeScreens/Screens';

const App = () => {
  return (
    <NavigationContainer>
      <MainFile />
      {/* <Screens /> */}
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  txt: {
    color: 'red',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 24,
  },
});
