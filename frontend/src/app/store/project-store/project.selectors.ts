import {createFeatureSelector, createSelector} from '@ngrx/store';
import {Project} from "../../../assets/models/project.model";

export const selectProjectsFeature = createFeatureSelector<{ currentProject: Project | null, projectsGrid: Project[] }>('Project');

export const selectCurrentProject = createSelector(
  selectProjectsFeature,
  (state) => state.currentProject
);

export const selectProjectsGrid = createSelector(
  selectProjectsFeature,
  (state) => state.projectsGrid
);
