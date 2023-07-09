export interface Project {
  name: string;
  projectPhotoUrl: string;
  projectVideoUrl: string;
  daysLeft: number;
  stage: string; /*condition: 10 characters only, ${daysLeft} to ${stage}*/
}
