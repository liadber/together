import {Component, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {Store} from "@ngrx/store";
import {ProfileActions} from "../../../store/profile-store/profile.actions";
import {selectCurrentProfileId} from "../../../store/selectors";
import {Observable} from "rxjs";
import {ProjectActions} from "../../../store/project-store/project.actions";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {

  private currentProfileId$: Observable<string | null>;

  constructor(private store: Store) {
    this.currentProfileId$ = this.store.select(selectCurrentProfileId);
  }

  ngOnInit() {
  }

  profileClicked() {
    this.currentProfileId$.subscribe(currentProfileId => {
      if (currentProfileId) {
        this.store.dispatch(ProfileActions.loadProfile({profileId: currentProfileId}));
        this.store.dispatch(ProjectActions.loadProjectsByProfileId({profileId: currentProfileId}));
      }
    });
  }

  exploreClicked() {
    this.store.dispatch(ProjectActions.loadRandomProjects());
  }
}
