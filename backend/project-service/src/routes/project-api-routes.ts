import express, {Request, Response} from 'express';
import {ProjectRecordModel} from "../models/project-record-model";
import {Project} from "../types/project.model";
import ProjectService from "../services/project.service";

const router = express.Router();
const projectService = new ProjectService();

// Route to get all profiles
router.get('', async (req: Request, res: Response) => {

});

// Route to get a profile by ID
router.get('/projects/:profileId', async (req: Request, res: Response) => {
  const {profileId} = req.params;
  const projectRecords: ProjectRecordModel[] | null = await projectService.getProjectsByProfileId(profileId);

  if (projectRecords) {
    const projects: Project[] = projectRecords.map(convertToProject);
    res.json(projects);
  } else {
    res.status(404).json({error: 'Projects not found'});
  }
});

function convertToProject(record: ProjectRecordModel): Project {
  return {
    projectId: record.projectId,
    profileId: record.profileId,
    name: record.name,
    description: record.description,
    photoUrl: record.photoUrl,
    daysLeft: record.daysLeft,
    inDemand: record.inDemand,
  };
}

export default router;
