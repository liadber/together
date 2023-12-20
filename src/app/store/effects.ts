import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {of} from 'rxjs';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {AppActions} from './actions';
import {AuthService} from '../core/services/auth.service';

@Injectable()
export class AppEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService
  ) {
  }

  getCurrentProfileId$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AppActions.getCurrentProfileId),
      mergeMap(() =>
        this.authService.getCurrentProfileId().pipe(
          map((currentProfileId: string) => AppActions.getCurrentProfileIdSuccess({currentProfileId})),
          catchError((error) => of(AppActions.getCurrentProfileIdFailure()))
        )
      )
    )
  );

}
