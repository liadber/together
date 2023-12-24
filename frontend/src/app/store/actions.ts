import {createActionGroup, emptyProps, props} from "@ngrx/store";

export const AppActions = createActionGroup({
  source: 'App',
  events: {
    getCurrentProfileId: emptyProps(),
    getCurrentProfileIdSuccess: props<{ currentProfileId: string }>(),
    getCurrentProfileIdFailure: emptyProps(),
  },
});
