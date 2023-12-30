// apiRoutes.ts
import express, { Request, Response } from 'express';
import ProfileService from '../services/profile.service';
import { Profile } from '../types/profile.model';

const router = express.Router();
const profileService = new ProfileService();

// Route to get all profiles
router.get('/profiles', (req: Request, res: Response) => {
  const profiles: Profile[] = profileService.getAllProfiles();
  res.json(profiles);
});

// Route to get a profile by ID
router.get('/:profileId', (req: Request, res: Response) => {
  const { profileId } = req.params;
  const profile: Profile | undefined = profileService.getProfileById(profileId);

  if (profile) {
    res.json(profile);
  } else {
    res.status(404).json({ error: 'Profile not found' });
  }
});

export default router;
