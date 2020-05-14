import { Meal } from './Meal';

export interface MealsState {
  meals: Meal[];
  filteredMeals: Meal[];
  favoriteMeals: Meal[];
}

export interface RootState {
  meals: MealsState
}