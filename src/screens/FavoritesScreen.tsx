import React from 'react';
import { StyleSheet } from 'react-native';
import { StackNavigationProp } from 'react-navigation-stack/lib/typescript/src/vendor/types';

import MealList from '../components/MealList';
import { Meal } from '../models/Meal';
import { MEALS } from '../../mocks/categories';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/CustomHeaderButton';

type Props = {
  navigation: any;
};

const FavoritesScreen = (props: Props) => {
  const favoriteMeals: Meal[] = MEALS
    .filter((meal) => meal.isVegetarian);

  return (
    <MealList
      displayedMeals={favoriteMeals}
      navigation={props.navigation}
    />
  )
};

FavoritesScreen.navigationOptions = (props: Props) => {
  return {
    title: 'Your favorites',
    headerLeft: (navigationProperties: any) => {
      return (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item
            title='Menu'
            iconName="menu"
            onPress={() => {
              console.log('Showing drawer...', props.navigation.toggleDrawer());
              // navigationProperties.navigation.toggleDrawer();
            }}
          />
        </HeaderButtons>
      )
    }
  }
}

const styles = StyleSheet.create({});

export default FavoritesScreen;