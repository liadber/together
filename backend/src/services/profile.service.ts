import {Profile} from "../models/profile";


class ProfileService {
  async getAllProfiles(): Promise<Profile[]> {
    try {
      const profiles = await Profile.findAll();
      return profiles;
    } catch (error) {
      console.error('Error fetching profiles:', error);
      throw error;
    }
  }

  async getProfileById(id: string): Promise<Profile | null> {
    try {
      const profile = await Profile.findByPk(id);
      return profile;
    } catch (error) {
      console.error(`Error fetching profile with id ${id}:`, error);
      throw error;
    }
  }
}

export default ProfileService;
