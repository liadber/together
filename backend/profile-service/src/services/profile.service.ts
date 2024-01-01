import {ProfileRecordModel} from "../models/profile-record-model";


class ProfileService {
  async getAllProfiles(): Promise<ProfileRecordModel[]> {
    try {
      const profiles = await ProfileRecordModel.findAll();
      return profiles;
    } catch (error) {
      console.error('Error fetching profiles:', error);
      throw error;
    }
  }

  async getProfileById(id: string): Promise<ProfileRecordModel | null> {
    try {
      const profile = await ProfileRecordModel.findByPk(id);
      return profile;
    } catch (error) {
      console.error(`Error fetching profile with id ${id}:`, error);
      throw error;
    }
  }
}

export default ProfileService;
