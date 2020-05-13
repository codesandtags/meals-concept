import React, { useEffect } from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import { StackNavigationProp } from 'react-navigation-stack/lib/typescript/src/vendor/types';

import Colors from '../constants/Colors';
import { Categories, Meals } from '../navigation/routes';

type Props = {
  navigation: StackNavigationProp;
};

const WelcomeScreen = (props: Props) => {
  useEffect(() => {
    setTimeout(() => {
      props.navigation.replace(Categories);
    }, 4000);
  });

  return (
    <View style={styles.screen}>
      <ImageBackground
        style={styles.welcomeImage}
        source={require('../../assets/images/logo.png')}
      />
    </View>
  )
};

WelcomeScreen.navigationOptions = (props: Props) => {
  return {
    headerShown: false,
    tabBarVisible: false
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.black,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
  welcomeImage: {
    alignItems: 'center',
    width: '100%',
    height: 150,
    borderWidth: 0,
    borderColor: Colors.primaryColor,
    backgroundColor: Colors.black,
  }
});

export default WelcomeScreen;