import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {Project} from "../../../assets/models/project.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private apiUrl = 'http://localhost:3002/project/'; // Replace with your actual API endpoint

  constructor(private http: HttpClient) {}


  getProjectDetails(projectId: string): Observable<Project> {
    // const url = `${this.baseUrl}/profiles/${profileId}`; // Adjust your endpoint accordingly
    // return this.http.get<Profile>(url);
    return of(demoProject)
  }

  getProjectsByProfileId(profileId: string): Observable<Project[]> {
    const url = `${this.apiUrl}/projects/${profileId}`;
    return this.http.get<Project[]>(url);
  }

  getRandomProjects(): Observable<Project[]> {
    const url = `${this.apiUrl}/random`; //todo: change to profileId
    return this.http.get<Project[]>(url);
    // return of([demoProjectAmy, demoProjectAmy, demoProjectAmy, demoProjectAmy,
    //   demoProjectAmy, demoProjectAmy, demoProjectAmy, demoProjectAmy,
    //   demoProjectAmy, demoProjectAmy, demoProjectAmy, demoProjectAmy,
    //   demoProjectAmy, demoProjectAmy, demoProjectAmy, demoProjectAmy,
    //   demoProjectAmy, demoProjectAmy, demoProjectAmy, demoProjectAmy,
    //   demoProjectAmy, demoProjectAmy, demoProjectAmy, demoProjectAmy,
    //   demoProjectAmy, demoProjectAmy]);
  }

  updateProject(updatedProject: Project) {
    return of(true);
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
const demoProject1: Project = {
  profileId: "currentUserId123",
  projectId: "444",
  name: 'New Album',
  description: "Hey everyone... I’m a singer in my beginning. Looking for a cool producer to do some shit together. I want to make a song+clip to make a breakthrough. I’m looking for beginners semi-professionals to start an interesting way together.  I’m a singer in my beginning. Looking for a cool producer to do some shit together",
  photoUrl: "",
  inDemand: ['Liad',
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
const demoProjectAmy: Project = {
  profileId: "AmyId123",
  projectId: "444",
  name: 'New Album',
  description: "Hey everyone... I’m a singer in my beginning. Looking for a cool producer to do some shit together. I want to make a song+clip to make a breakthrough. I’m looking for beginners semi-professionals to start an interesting way together.  I’m a singer in my beginning. Looking for a cool producer to do some shit together",
  photoUrl: "",
  inDemand: ['Liad',
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
