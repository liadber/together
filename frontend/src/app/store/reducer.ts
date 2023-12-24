import {createFeature, createReducer, on} from "@ngrx/store";
import {initialState} from "./state"
import {AppActions} from "./actions";

export const appState = createFeature({
  name: 'Application',
  reducer: createReducer(
    initialState,
    on(AppActions.getCurrentProfileIdSuccess, (state, {currentProfileId}) => ({
      ...state,
      currentProfileId,
      error: null,
    })),
  )
});
