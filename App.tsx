import React, { useState } from 'react';
import { StyleSheet } from 'react-native';

import * as Fonts from 'expo-font';
import { AppLoading } from 'expo';
import MealsNavigator from './src/navigation/MealsNavigator';

const fetchFonts = () => {
  return Fonts.loadAsync({
    'Montserrat': require('./assets/fonts/Montserrat-Regular.ttf'),
    'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.ttf'),
  });
}

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (!fontsLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontsLoaded(true)}
      />
    );
  }

  return (
    <MealsNavigator/>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'Montserrat'
  }
});
