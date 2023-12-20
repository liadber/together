import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import {ProfileActions} from "./profile.actions";
import {ProfileService} from "../../core/services/profile.service";

@Injectable()
export class ProfileEffects {

  loadProfile$ = createEffect(() => this.actions$.pipe(
    ofType(ProfileActions.loadProfile),
    switchMap(action => this.profileService.getProfile(action.profileId).pipe(
      map(profile => ProfileActions.loadProfileSuccess({ profile })),
      catchError(error => of(ProfileActions.loadProfileFailure({ error })))
    ))
  ));

  constructor(
    private actions$: Actions,
    private profileService: ProfileService
  ) {}
}
