import {createActionGroup, emptyProps, props} from "@ngrx/store";
import {Profile} from "../../../assets/models/profile.model";

export const ProfileActions = createActionGroup({
  source: 'Profile',
  events: {
    loadProfile: props<{ profileId: string }>(),
    loadProfileSuccess: props<{ profile: Profile }>(),
    loadProfileFailure: props<{ error: any }>(),
  },
});
