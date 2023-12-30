import express, { Request, Response } from 'express';
import ProfileService from '../services/profile.service';
import {Profile} from "../models/profile";

const router = express.Router();
const profileService = new ProfileService();

// Route to get all profiles
router.get('/', async (req: Request, res: Response) => {
  let profiles: Profile[] = await profileService.getAllProfiles();
  const formattedProfiles = profiles.map((profile) => ({
    id: profile.id,
    name: profile.name,
    description: profile.description,
    createdAt: profile.createdAt,
    updatedAt: profile.updatedAt,
  }));
  res.json(formattedProfiles);
});

// Route to get a profile by ID
router.get('/:profileId', async (req: Request, res: Response) => {
  const { profileId } = req.params;
  const profile: Profile | null = await profileService.getProfileById(profileId);

  if (profile) {
    res.json(profile);
  } else {
    res.status(404).json({ error: 'Profile not found' });
  }
});

export default router;
