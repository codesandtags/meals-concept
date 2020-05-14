import { Meal } from '../../models/Meal';

export interface Action {
  type: string,
  payload: any
}

export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';

export const toggleFavorite = (meal: Meal): Action => {
  return {
    type: TOGGLE_FAVORITE,
    payload: meal
  }
}