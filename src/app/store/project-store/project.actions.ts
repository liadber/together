import {createActionGroup, emptyProps, props} from "@ngrx/store";
import {Project} from "../../../assets/models/project.model";

export const ProjectActions = createActionGroup({
  source: 'Project',
  events: {
    loadCurrentProject: props<{ currentProject: Project }>(),
    loadProjectsByProfileId: props<{ profileId: string }>(),
    loadProjectsByProfileIdSuccess: props<{ projectsByProfileId: Project[] }>(),
    loadProjectsByProfileIdFailure: props<{ error: any }>(),
    loadRandomProjects: emptyProps(),
    loadRandomProjectsSuccess: props<{ randomProjects: Project[] }>(),
    loadRandomProjectsFailure: props<{ error: any }>(),
    updateProject: props<{ updatedProject: Project }>(),
    updateProjectSuccess: emptyProps(),
    updateProjectFailure: props<{ error: any }>(),
  },
});
