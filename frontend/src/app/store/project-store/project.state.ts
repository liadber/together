import {Project} from "../../../assets/models/project.model";

export const initialProjectsState: { currentProject: Project | null, projectsGrid: Project[] } = {
  currentProject: null,
  projectsGrid: []
};
