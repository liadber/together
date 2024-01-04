import {ProjectRecordModel} from "../models/project-record-model";

class ProjectService {
  async getRandomProjects(): Promise<ProjectRecordModel[]> {
    try {
      const totalCount = await ProjectRecordModel.count();

      // Set the desired count to be 12 or the total number of projects, whichever is smaller
      const desiredCount = Math.min(12, totalCount);

      // Generate an array of unique random indices
      const randomIndices = generateUniqueRandomIndices(desiredCount, totalCount);

      // Fetch projects based on the generated random indices
      const randomProjects = await ProjectRecordModel.findAll({
        where: {
          projectId: randomIndices,
        },
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


// Helper function to generate an array of unique random indices
const generateUniqueRandomIndices = (count: number, totalCount: number): number[] => {
  const randomIndices: number[] = [];

  while (randomIndices.length < count) {
    const randomIndex = Math.floor(Math.random() * totalCount) + 1; // Assuming project IDs start from 1
    if (!randomIndices.includes(randomIndex)) {
      randomIndices.push(randomIndex);
    }
  }

  return randomIndices;
};

export default ProjectService;
