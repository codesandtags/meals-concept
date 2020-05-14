import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { StackNavigationProp } from 'react-navigation-stack/lib/typescript/src/vendor/types';
import { useSelector } from 'react-redux';

import { Category } from '../models/Category';
import { Meal } from '../models/Meal';
import Colors from '../constants/Colors';
import MealList from '../components/MealList';
import { RootState } from '../models/MealState';

type Props = {
  navigation: StackNavigationProp;
};

const CategoryMealsScreen = (props: Props) => {
  const category: Category = props.navigation.getParam('category');
  const availableMeals = useSelector((state: RootState) => state.meals.filteredMeals);
  const displayedMeals: Meal[] = availableMeals.filter((meal) => meal.categoryId.includes(category.id));

  if (displayedMeals.length === 0) {
    return (
      <View style={styles.mealsNotFound}>
        <Image
          source={require('../../assets/images/no_meals.png')}
          style={styles.mealsNotFoundImage}
        />
        <Text>No meals found, maybe check your filters?</Text>
      </View>
    );
  }

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
  },
  mealsNotFound: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  mealsNotFoundImage: {
    width: '50%',
    resizeMode: 'contain'
  }
});

export default CategoryMealsScreen;