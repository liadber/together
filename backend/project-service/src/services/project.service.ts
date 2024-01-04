import {ProjectRecordModel} from "../models/project-record-model";
import {Sequelize} from "sequelize";

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
}

export default ProjectService;
