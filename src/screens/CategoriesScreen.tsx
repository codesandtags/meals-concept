import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationParams } from 'react-navigation';
import { StackNavigationProp } from 'react-navigation-stack/lib/typescript/src/vendor/types';

type Props = {
  navigation: StackNavigationProp;
};

const CategoriesScreen = (props: Props) => {

  const handleGoToMeals = () => {
    props.navigation.navigate('CategoryMeals');
  };

  return (
    <View style={styles.screen}>
      <Text>Welcome to this CategoriesScreen</Text>
      <Button title="Go to Meals" onPress={handleGoToMeals}/>
    </View>
  )
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default CategoriesScreen;