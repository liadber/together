import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {Project} from "../../../assets/models/project.model";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private baseUrl = 'your-api-base-url'; // Replace with your actual API base URL
  // constructor(private http: HttpClient) {
  // }


  getProjectDetails(projectId: string): Observable<Project> {
    // const url = `${this.baseUrl}/profiles/${profileId}`; // Adjust your endpoint accordingly
    // return this.http.get<Profile>(url);
    return of(demoProject)
  }

  getProjectsByProfileId(profileId: string): Observable<Project[]> {
    return of([demoProject, demoProject, demoProject, demoProject,
      demoProject, demoProject, demoProject, demoProject,
      demoProject, demoProject, demoProject, demoProject,
      demoProject, demoProject, demoProject, demoProject,
      demoProject, demoProject, demoProject, demoProject,
      demoProject, demoProject, demoProject, demoProject,
      demoProject, demoProject]);
  }

  getRandomProjects(): Observable<Project[]> {
    return of([demoProject, demoProject, demoProject, demoProject,
      demoProject, demoProject, demoProject, demoProject,
      demoProject, demoProject, demoProject, demoProject,
      demoProject, demoProject, demoProject, demoProject,
      demoProject, demoProject, demoProject, demoProject,
      demoProject, demoProject, demoProject, demoProject,
      demoProject, demoProject]);
  }
}

const demoProject: Project = {
  profileId: "currentUserId123",
  projectId: "444",
  name: 'New Album',
  description: "Hey everyone... I’m a singer in my beginning. Looking for a cool producer to do some shit together. I want to make a song+clip to make a breakthrough. I’m looking for beginners semi-professionals to start an interesting way together.  I’m a singer in my beginning. Looking for a cool producer to do some shit together",
  photoUrl: "",
  inDemand: ['Producer',
    'Record studio owner',
    'Guitarist',
    'Record company',
    'Fashionista',
    'Makeup artist',
    'Decorator',
    'Producer',
    'Record studio owner',
    'Guitarist',
    'Record company',
    'Fashionista',
    'Makeup artist',
    'Decorator'],
  daysLeft: 35
};
