import { createReducer, on } from '@ngrx/store';
import { setLanguage } from './app.actions';
import { initialState, AppState } from './app.state';

const reducer = createReducer(
  initialState,
  on(setLanguage, (state, { language }) => ({ ...state, language }))
);

export function appReducer(state: AppState | undefined, action: any) {
  return reducer(state, action);
}