import {createFeature, createReducer, on} from "@ngrx/store";
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
    on(ProjectActions.loadCurrentProject, (state, {currentProject}) => ({
      ...state,
      currentProject: currentProject
    })),
    on(ProjectActions.updateProject, (state, {updatedProject}) => {
      const updatedProjectsGrid = state.projectsGrid.map((project) =>
        project.projectId === updatedProject.projectId ? {...project, ...updatedProject} : project
      );
      return {...state, projectsGrid: updatedProjectsGrid, currentProject: updatedProject};
    })
  ),
});
