import {createFeature, createReducer, on} from "@ngrx/store";
import {initialProfileState} from "../profile-store/profile.state";
import {ProfileActions} from "../profile-store/profile.actions";
import {initialProjectsState} from "./project.state";
import {ProjectActions} from "./project.actions";

export const projectFeature = createFeature({
  name: 'Project',
  reducer: createReducer(
    initialProjectsState,
    on(ProjectActions.loadProjectsByProfileIdSuccess, (state, {projectsByProfileId}) => ({
      ...state,
      projectsGrid: projectsByProfileId,
    })),
    on(ProjectActions.loadRandomProjectsSuccess, (state, {randomProjects}) => ({
      ...state,
      projectsGrid: randomProjects,
    })),
  ),
});
