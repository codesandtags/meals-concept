import { MEALS } from '../../../mocks/categories';
import { Meal } from '../../models/Meal';
import { Action, TOGGLE_FAVORITE } from '../actions/mealsActions';

export interface MealsState {
  meals: Meal[];
  filteredMeals: Meal[];
  favoriteMeals: Meal[];
}

export interface RootState {
  meals: MealsState
}

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

    default:

      return state;
  }
}

export default mealsReducer;