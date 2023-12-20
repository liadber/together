import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from './state';

export const selectAppState = createFeatureSelector<AppState>('Application');

export const selectCurrentProfileId = createSelector(
  selectAppState,
  (state: AppState) => state.currentProfileId
);
