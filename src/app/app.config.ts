import {ApplicationConfig, isDevMode} from '@angular/core';
import {provideRouter} from '@angular/router';
import {routes} from './app.routes';
import {provideState, provideStore} from "@ngrx/store";
import {appState} from "./store/reducer";
import {provideStoreDevtools} from "@ngrx/store-devtools";
import {AppEffects} from "./store/effects";
import {provideEffects} from "@ngrx/effects";
import {ProfileEffects} from "./store/profile-store/profile.effects";
import {profileFeature} from "./store/profile-store/profile.reducer";

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
    provideStore(),
    provideState(appState),
    provideEffects(AppEffects, AppEffects),
    provideState(profileFeature),
    provideEffects(ProfileEffects, ProfileEffects),
    provideStoreDevtools({ //todo: delete after debug
      maxAge: 25, // Retains last 25 states
      logOnly: !isDevMode(), // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
      trace: false, //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
      traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
      connectInZone: true // If set to true, the connection is established within the Angular zone
    })
  ]
};
