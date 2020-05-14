import React from 'react';
import { StyleSheet } from 'react-native';
import { StackNavigationProp } from 'react-navigation-stack/lib/typescript/src/vendor/types';
import { useSelector } from 'react-redux';

import { Category } from '../models/Category';
import { Meal } from '../models/Meal';
import Colors from '../constants/Colors';
import MealList from '../components/MealList';
import { RootState } from '../store/reducers/mealsReducer';

type Props = {
  navigation: StackNavigationProp;
};

const CategoryMealsScreen = (props: Props) => {
  const category: Category = props.navigation.getParam('category');
  const availableMeals = useSelector((state: RootState) => state.meals.filteredMeals);
  const displayedMeals: Meal[] = availableMeals.filter((meal) => meal.categoryId.includes(category.id));

  return (
    <MealList
      displayedMeals={displayedMeals}
      navigation={props.navigation}
    />
  )
};

CategoryMealsScreen.navigationOptions = (props: Props) => {
  const category: Category = props.navigation.getParam('category');

  return {
    title: category.title,
  }
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: Colors.darkGray,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  }
});

export default CategoryMealsScreen;