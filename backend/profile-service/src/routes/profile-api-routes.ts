import express, {Request, Response} from 'express';
import ProfileService from '../services/profile.service';
import {ProfileRecordModel} from "../models/profile-record-model";
import {Profile} from "../types/profile.model";

const router = express.Router();
const profileService = new ProfileService();

// Route to get all profiles
router.get('/', async (req: Request, res: Response) => {
  let profilesRecords: ProfileRecordModel[] = await profileService.getAllProfiles();
  let profiles: Profile[] = profilesRecords.map(profileRecord => convertToProfile(profileRecord));
  res.json(profiles);
});

// Route to get a profile by ID
router.get('/:profileId', async (req: Request, res: Response) => {
  const {profileId} = req.params;
  const profileRecord: ProfileRecordModel | null = await profileService.getProfileById(profileId);

  if (profileRecord) {
    const profile: Profile = convertToProfile(profileRecord);
    res.json(profile);
  } else {
    res.status(404).json({error: 'Profile not found'});
  }
});

function convertToProfile(record: ProfileRecordModel): Profile {
  return {
    id: record.id,
    name: record.name,
    description: record.description,
    projectsNumber: 0,  // Mock data for projectsNumber
    believersNumber: 0, // Mock data for believersNumber
    imgUrl: ''         // Mock data for imgUrl
  };
}

export default router;
