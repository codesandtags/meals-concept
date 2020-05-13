import React, { ReactElement } from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { MaterialIcons } from '@expo/vector-icons';
import { DefaultTheme } from 'react-native-paper';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import CategoriesScreen from '../screens/CategoriesScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';

import * as Routes from './routes';
import { Welcome } from './routes';
import Colors from '../constants/Colors';
import FavoritesScreen from '../screens/FavoritesScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import FiltersScreen from '../screens/FiltersScreen';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { FONT_BOLD, FONT_REGULAR } from '../constants/Fonts';

const defaultStackNavigatorOptions = {
  headerStyle: {
    backgroundColor: Colors.black,
  },
  headerTintColor: Colors.white,
  headerTitleStyle: {
    fontFamily: FONT_BOLD
  },
  headerBackTitle: 'Back',
  animationEnabled: true,
  headerBackTitleStyle: {
    fontFamily: FONT_REGULAR
  }
};

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
  defaultNavigationOptions: defaultStackNavigatorOptions,
  navigationOptions: (navigationOptions: any) => {
    let tabBarVisible = true;

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

const FavNavigator = createStackNavigator({
  [Routes.Favorites]: {
    screen: FavoritesScreen,
  },
  [Routes.Meals]: {
    screen: MealDetailScreen,
  },
}, {
  defaultNavigationOptions: defaultStackNavigatorOptions
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
    screen: FavNavigator,
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

const FiltersNavigator = createStackNavigator({
  [Routes.Filters]: {
    screen: FiltersScreen,
  }
}, {
  defaultNavigationOptions: defaultStackNavigatorOptions
})
const MainNavigator = createDrawerNavigator({
  MealsFav: {
    screen: MealsTabFavNavigator,
    navigationOptions: {
      drawerLabel: 'Meals Categories'
    }
  },
  Filters: {
    screen: FiltersNavigator,
    navigationOptions: {
      drawerLabel: 'Filters'
    }
  }
}, {
  contentOptions: {
    activeTintColor: Colors.primaryColor,
    activeBackgroundColor: Colors.gray
  }
});

export default createAppContainer(MainNavigator);