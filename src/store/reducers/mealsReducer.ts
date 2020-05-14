import { MEALS } from '../../../mocks/categories';
import { SET_FILTERS, TOGGLE_FAVORITE } from '../actions/mealsActions';
import { MealsState } from '../../models/MealState';
import { Action } from '../../models/Action';
import { Filters } from '../../models/Filters';

const initialState: MealsState = {
  meals: [...MEALS],
  filteredMeals: [...MEALS],
  favoriteMeals: []
};

const mealsReducer = (state = initialState, action: Action) => {

  switch (action.type) {
    case TOGGLE_FAVORITE:
      const existMealIndex = state
        .favoriteMeals
        .findIndex(meal => meal.id === action.payload.id);

      if (existMealIndex >= 0) {
        const updatedFavoriteMeals = [...state.favoriteMeals];
        updatedFavoriteMeals.splice(existMealIndex, 1);

        return {
          ...state,
          favoriteMeals: [...updatedFavoriteMeals]
        }
      } else {
        const updatedFavoriteMeals = [...state.favoriteMeals].concat([action.payload]);

        return {
          ...state,
          favoriteMeals: [...updatedFavoriteMeals]
        }

      }

    case SET_FILTERS:
      const appliedFilters: Filters = action.payload;
      const updatedFilteredMeals = state.meals.filter(meal => {
        if (appliedFilters.isGlutenFree && !meal.isGlutenFree) {
          return false;
        }
        if (appliedFilters.isLactoseFree && !meal.isLactoseFree) {
          return false;
        }
        if (appliedFilters.isVegan && !meal.isVegan) {
          return false;
        }
        if (appliedFilters.isVegetarian && !meal.isVegetarian) {
          return false;
        }
        return true;
      });

      return {
        ...state,
        filteredMeals: [...updatedFilteredMeals]
      };

    default:

      return state;
  }
}

export default mealsReducer;