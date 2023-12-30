import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Profile} from "../../../assets/models/profile.model";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private baseUrl = 'your-api-base-url'; // Replace with your actual API base URL
  // constructor(private http: HttpClient) {
  // }

  getProfile(profileId: string): Observable<Profile> {
    // const url = `${this.baseUrl}/profiles/${profileId}`; // Adjust your endpoint accordingly
    // return this.http.get<Profile>(url);
    if (profileId === "currentUserId123") {
      return of({
        id: "currentUserId123",
        name: "Billie Eilish",
        description: 'A sing-song-writer, producer, artist and an activist. Hope to get some new co-workers to get my ideas come true.',
        projectsNumber: 67,
        believersNumber: 90,
        imgUrl: ""
      })
    } else {
      return of({
        id: "differentUser",
        name: "Amy Winehouse",
        description: 'I just do my shit',
        projectsNumber: 6337,
        believersNumber: 9330,
        imgUrl: ""
      })
    }

  }
}