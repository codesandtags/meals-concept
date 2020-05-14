import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import * as Fonts from 'expo-font';
import { AppLoading } from 'expo';
import MealsNavigator from './src/navigation/MealsNavigator';
import { FONT_BOLD, FONT_REGULAR } from './src/constants/Fonts';
import mealsReducer, { MealsState } from './src/store/reducers/mealsReducer';

const fetchFonts = () => {
  return Fonts.loadAsync({
    [FONT_REGULAR]: require('./assets/fonts/Montserrat-Regular.ttf'),
    [FONT_BOLD]: require('./assets/fonts/Montserrat-Bold.ttf'),
  });
}

const rootReducer = combineReducers({
  meals: mealsReducer
})
const store = createStore(rootReducer);

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
    <Provider store={store}>
      <MealsNavigator/>
    </Provider>
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
