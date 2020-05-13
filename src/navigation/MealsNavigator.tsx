import React, { ReactElement } from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { MaterialIcons } from '@expo/vector-icons';
import { DefaultTheme } from 'react-native-paper';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';


import CategoriesScreen from '../screens/CategoriesScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';

import * as Routes from './routes';
import { Welcome } from './routes';
import Colors from '../constants/Colors';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import FavoritesScreen from '../screens/FavoritesScreen';
import WelcomeScreen from '../screens/WelcomScreen';
import { Platform } from 'react-native';

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


    console.log('Showing state : ', navigationOptions.navigation.state.routes);
    if (navigationOptions.navigation.state
      && navigationOptions.navigation.state.routes.length > 0
      && navigationOptions.navigation.state.routes.some((route: any) => route.routeName === Welcome)) {
      tabBarVisible = false;
    }

    return {
      tabBarVisible
    }
  }
});

const tabScreenConfigRoutes = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo: any): ReactElement => (
        <MaterialIcons name="restaurant" color={tabInfo.tintColor} size={24}/>
      )
    }
  },
  Favorites: {
    screen: FavoritesScreen,
    navigationOptions: {
      tabBarIcon: (tabInfo: any): ReactElement => (
        <MaterialIcons name="favorite" color={tabInfo.tintColor} size={24}/>
      )
    }
  }
};
const tabScreenConfigOptions = {
  tabBarOptions: {
    activeTintColor: Colors.primaryColor,
  }
}

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.white,
    accent: Colors.accentColor,
  },
};

const MealsTabFavNavigator = Platform.OS === 'android'
  ? createMaterialBottomTabNavigator(tabScreenConfigRoutes, {
    activeColor: Colors.primaryColor,
    theme: theme
  })
  : createBottomTabNavigator(tabScreenConfigRoutes, tabScreenConfigOptions);

export default createAppContainer(MealsTabFavNavigator);