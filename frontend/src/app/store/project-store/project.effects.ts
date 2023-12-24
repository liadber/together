import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {of} from 'rxjs';
import {catchError, map, switchMap} from 'rxjs/operators';
import {ProjectActions} from './project.actions';
import {ProjectService} from "../../core/services/project.service";

@Injectable()
export class ProjectEffects {

  constructor(
    private actions$: Actions,
    private projectService: ProjectService // Inject your service
  ) {
  }

  loadProjectsByProfileId$ = createEffect(() => this.actions$.pipe(
    ofType(ProjectActions.loadProjectsByProfileId), // Listen for the loadProjectsByProfileId action
    switchMap(action =>
      this.projectService.getProjectsByProfileId(action.profileId).pipe( // Assuming your service method is getProjectsByProfileId
        map(projects => ProjectActions.loadProjectsByProfileIdSuccess({projectsByProfileId: projects})),
        catchError(error => of(ProjectActions.loadProjectsByProfileIdFailure({error})))
      )
    )
  ));

  getRandomProjects$ = createEffect(() => this.actions$.pipe(
    ofType(ProjectActions.loadRandomProjects),
    switchMap(() =>
      this.projectService.getRandomProjects().pipe(
        map(randomProjects => ProjectActions.loadRandomProjectsSuccess({randomProjects})),
        catchError(error => of(ProjectActions.loadRandomProjectsFailure({error})))
      )
    )
  ));

  updateProject$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProjectActions.updateProject),
      switchMap(action =>
        this.projectService.updateProject(action.updatedProject).pipe(
          map(() => ProjectActions.updateProjectSuccess()),
          catchError(error => of(ProjectActions.updateProjectFailure({ error })))
        )
      )
    )
  );


}
