import {createFeature, createReducer, on} from "@ngrx/store";
import {ProfileActions} from "./profile.actions";
import {initialProfileState} from "./profile.state";

export const profileFeature = createFeature({
  name: 'Profile',
  reducer: createReducer(
    initialProfileState,
    on(ProfileActions.loadProfileSuccess, (state, {profile}) => ({
      ...state,
      ...profile
    })),
  ),
});
