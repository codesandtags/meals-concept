import React from 'react';
import { ListRenderItemInfo, StyleSheet, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Meal } from '../models/Meal';
import MealItem from './MealItem';
import { Meals } from '../navigation/routes';
import { StackNavigationProp } from 'react-navigation-stack/lib/typescript/src/vendor/types';

type Props = {
  displayedMeals: any,
  navigation: StackNavigationProp
};

const MealList = (props: Props) => {
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
    <View style={styles.mealList}>
      <FlatList
        style={{width: '90%'}}
        data={props.displayedMeals}
        renderItem={renderMealItem}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  mealList: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default MealList;