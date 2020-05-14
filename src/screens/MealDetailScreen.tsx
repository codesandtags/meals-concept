import React, { useCallback, useEffect } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { StackNavigationProp } from 'react-navigation-stack/lib/typescript/src/vendor/types';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { Entypo, MaterialIcons } from '@expo/vector-icons';

import CustomHeaderButton from '../components/CustomHeaderButton';
import { Meal } from '../models/Meal';
import { ScrollView } from 'react-native-gesture-handler';
import { FONT_BOLD, FONT_REGULAR } from '../constants/Fonts';
import Colors from '../constants/Colors';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../store/actions/mealsActions';
import { RootState } from '../models/MealState';

type Props = {
  navigation: StackNavigationProp;
};

const MealDetailScreen = (props: Props) => {
  const meal: Meal = props.navigation.getParam('meal');
  const navigation: StackNavigationProp = props.navigation;
  const goToHome = () => {
    navigation.popToTop()
  };
  if (!meal) goToHome();
  const isFavorite = useSelector((state: RootState) => {
    return state
      .meals
      .favoriteMeals
      .some(currentMeal => currentMeal.id === meal.id)
  });

  const dispatch = useDispatch();
  const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(meal));
  }, [dispatch, meal]);

  useEffect(() => {
    navigation.setParams({
      toggleFavorite: toggleFavoriteHandler,
      isFavorite: isFavorite
    });
  }, [toggleFavoriteHandler, isFavorite])

  const renderIngredients = () => {
    return meal.ingredients.map((ingredient, index) => {
      return (
        <View style={styles.mealStep} key={`${index}`}>
          <Entypo
            name="circle"
            size={18}
            color="black"
            style={styles.mealIconList}/>
          <Text style={styles.mealItemText}>
            {ingredient}
          </Text>
        </View>
      )
    })
  }

  const renderSteps = () => {
    return meal.steps.map((step, index) => {
      return (
        <View style={styles.mealStep} key={`${index}`}>
          <MaterialIcons
            name="check-box-outline-blank"
            size={20}
            color="black"
            style={styles.mealIconList}/>
          <Text style={styles.mealItemText}>{step}</Text>
        </View>
      )
    })
  }

  return (
    <ScrollView>
      <Image
        source={{uri: meal.imageUrl}}
        style={styles.mealImage}
      />
      <View style={styles.mealSummary}>
        <Text>{meal.duration} Min</Text>
        <Text>{meal.complexity.toUpperCase()}</Text>
        <Text>{meal.affordability}</Text>
      </View>
      <View style={styles.mealDetails}>
        <Text style={styles.mealTitle} numberOfLines={1}>{meal.title}</Text>
        <Text style={styles.mealSectionTitle} numberOfLines={1}>Ingredients</Text>
        <View>{renderIngredients()}</View>
        <Text style={styles.mealSectionTitle} numberOfLines={1}>Steps</Text>
        <View>{renderSteps()}</View>
      </View>
    </ScrollView>
  )
};

MealDetailScreen.navigationOptions = (props: Props) => {
  const meal: Meal = props.navigation.getParam('meal');
  const toggleFavorite = props.navigation.getParam('toggleFavorite');
  const isFavorite = props.navigation.getParam('isFavorite');
  const iconName = isFavorite ? 'favorite': 'favorite-border';

  return {
    title: meal.title,
    headerRight: () => {
      return (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item
            title='Favorite'
            iconName={iconName}
            onPress={() => {
              toggleFavorite();
            }}
          />
        </HeaderButtons>
      )
    }
  }
};

const styles = StyleSheet.create({
  mealImage: {
    width: '100%',
    height: 300,
  },
  mealDetails: {
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  mealTitle: {
    fontFamily: FONT_BOLD,
    fontSize: 20,
    textAlign: 'center'
  },
  mealSectionTitle: {
    fontFamily: FONT_BOLD,
    fontSize: 18,
    marginVertical: 20
  },
  mealStep: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    paddingVertical: 2
  },
  mealIconList: {
    paddingRight: 5,
  },
  mealItemText: {
    fontFamily: FONT_REGULAR
  },
  mealSummary: {
    padding: 8,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: Colors.gray
  }
});

export default MealDetailScreen;