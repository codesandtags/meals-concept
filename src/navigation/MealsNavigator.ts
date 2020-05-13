import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import CategoriesScreen from '../screens/CategoriesScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';

import * as Routes from './routes';
import Colors from '../constants/Colors';

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
  }
}, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Colors.black,
    },
    headerTintColor: Colors.white,
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerBackTitle: 'Back',
    animationEnabled: true
  }
});

export default createAppContainer(MealsNavigator);