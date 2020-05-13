import React, { ReactElement } from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { MaterialIcons } from '@expo/vector-icons';

import CategoriesScreen from '../screens/CategoriesScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';

import * as Routes from './routes';
import Colors from '../constants/Colors';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import FavoritesScreen from '../screens/FavoritesScreen';
import WelcomeScreen from '../screens/WelcomScreen';

const MealsNavigator = createStackNavigator({
  [Routes.Categories]: {
    screen: CategoriesScreen,
    navigationOptions: {
      title: 'Meal Categories',
    }
  },
  [Routes.CategoryMeals]: {
    screen: CategoryMealsScreen,
  },
  [Routes.Meals]: {
    screen: MealDetailScreen,
  },
  [Routes.Welcome]: {
    screen: WelcomeScreen
  }
}, {
  initialRouteName: Routes.Welcome,
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Colors.black,
    },
    headerTintColor: Colors.white,
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerBackTitle: 'Back',
    animationEnabled: true,
  },
  navigationOptions: (navigationOptions: any) => {
    let tabBarVisible = true;

    if (navigationOptions.navigation.state.index === 0) {
      console.log('Showing state : ', navigationOptions.navigation.state);
      tabBarVisible = false;
    }

    return {
      tabBarVisible
    }
  }
});

const MealsTabFavNavigator = createBottomTabNavigator({
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo): ReactElement => (
        <MaterialIcons name="restaurant" color={tabInfo.tintColor} size={24}/>
      )
    }
  },
  Favorites: {
    screen: FavoritesScreen,
    navigationOptions: {
      tabBarIcon: (tabInfo): ReactElement => (
        <MaterialIcons name="favorite" color={tabInfo.tintColor} size={24}/>
      )
    }
  }
}, {
  tabBarOptions: {
    activeTintColor: Colors.primaryColor,
  }
});

export default createAppContainer(MealsTabFavNavigator);