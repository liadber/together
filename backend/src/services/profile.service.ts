import {Profile} from "../types/profile.model";


class ProfileService {
  // Mock data; replace with actual database interactions
  private profiles: Profile[] = [
    {
      id: '1',
      name: 'John Doe',
      description: 'A software engineer.',
    },
    // ... other profiles
  ];

  getAllProfiles(): Profile[] {
    return this.profiles;
  }

  getProfileById(profileId: string): Profile | undefined {
    return this.profiles.find((profile) => profile.id === profileId);
  }
}

export default ProfileService;
