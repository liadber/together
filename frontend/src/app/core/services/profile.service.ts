import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError } from 'rxjs/operators';
import { Profile } from "../../../assets/models/profile.model";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private baseUrl = 'http://localhost:3001/profile'; // Replace with your actual API base URL

  constructor(private http: HttpClient) {
  }

  getProfile(profileId: string): Observable<Profile> {
    const url = `${this.baseUrl}/${profileId}`; //todo: change to profileId
    return this.http.get<Profile>(url).pipe(
      catchError(error => {
        console.error('Error loading profile', error);
        return [];
      })
    );
  }
}
