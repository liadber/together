import {ProjectRecordModel} from "../models/project-record-model";
import {Sequelize} from "sequelize";
import {Project} from "../types/project.model";

class ProjectService {
  async getRandomProjects(): Promise<ProjectRecordModel[]> {
    try {
      const totalProjects = await ProjectRecordModel.count();
      const projectsToRetrieve = Math.min(12, totalProjects);

      const randomProjects = await ProjectRecordModel.findAll({
        order: [Sequelize.literal('RANDOM()')], // Order randomly
        limit: 12, // Limit to 12 projects
      });

      return randomProjects;
    } catch (error) {
      console.error('Error fetching random projects:', error);
      throw error;
    }
  }
  async getProjectsByProfileId(profileId: string): Promise<ProjectRecordModel[]> {
    try {
      const projects = await ProjectRecordModel.findAll({
        where: {
          profileId: profileId,
        },
      });
      return projects;
    } catch (error) {
      console.error(`Error fetching projects by profileId ${profileId}:`, error);
      throw error;
    }
  }

  async updateProject(updatedProject: Project): Promise<Project | null> {
    try {
      const { projectId, ...projectDetails } = updatedProject;
      const existingProject = await ProjectRecordModel.findByPk(projectId);

      if (existingProject) {
        await existingProject.update({
          ...projectDetails,
        });
        return existingProject;
      }
      return null; // Project not found
    } catch (error) {
      console.error(`Error updating project ${updatedProject.projectId}:`, error);
      throw error;
    }
  }
}

export default ProjectService;
