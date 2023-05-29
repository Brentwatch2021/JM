import { createAction, props } from '@ngrx/store';

export const setLanguage = createAction(
  '[App] Set Language',
  props<{ language: string }>()
);