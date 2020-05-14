import { Meal } from '../../models/Meal';
import { Action } from '../../models/Action';
import { Filters } from '../../models/Filters';

export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';
export const SET_FILTERS = 'SET_FILTERS';

export const toggleFavorite = (meal: Meal): Action => {
  return {
    type: TOGGLE_FAVORITE,
    payload: meal
  }
}

export const setFilters = (filters: Filters): Action => {
  return {
    type: SET_FILTERS,
    payload: filters
  }
};