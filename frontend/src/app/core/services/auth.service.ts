import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import { of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {}

  getCurrentProfileId(): Observable<string> {
    return of("currentUserId123");
  }
}
