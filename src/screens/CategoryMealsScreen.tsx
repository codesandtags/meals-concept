import React from 'react';
import { Button, ListRenderItemInfo, StyleSheet, Text, View } from 'react-native';
import { Meals } from '../navigation/routes';
import { StackNavigationProp } from 'react-navigation-stack/lib/typescript/src/vendor/types';
import { Category } from '../models/Category';
import { Meal } from '../models/Meal';
import { MEALS } from '../../mocks/categories';
import { FlatList } from 'react-native-gesture-handler';
import MealItem from '../components/MealItem';
import Colors from '../constants/Colors';

type Props = {
  navigation: StackNavigationProp;
};

const CategoryMealsScreen = (props: Props) => {
  const category: Category = props.navigation.getParam('category');
  const displayedMeals: Meal[] = MEALS.filter((meal) => meal.categoryId.includes(category.id));
  console.log('The category id is ', category.id);
  console.log('The meals matched are ', displayedMeals);

  const goToMeals = (meal: Meal) => {
    props.navigation.navigate(Meals, {
      meal
    });
  };
  const renderMealItem = (itemInfo: ListRenderItemInfo<Meal>) => {
    return (
      <MealItem
        meal={itemInfo.item}
        onSelectMeal={() => goToMeals(itemInfo.item)}
      />
    );
  }

  return (
    <View style={styles.screen}>
      <FlatList
        style={{width: '90%'}}
        data={displayedMeals}
        renderItem={renderMealItem}
      />
    </View>
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