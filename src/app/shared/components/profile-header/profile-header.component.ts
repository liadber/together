import {Component, Input, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {Profile} from "../../../../assets/models/profile.model";
import {selectCurrentProfileId} from "../../../store/selectors";
import {selectProfileFeature} from "../../../store/profile-store/profile.selectors";
import {RouterLink} from "@angular/router";
import {ProjectActions} from "../../../store/project-store/project.actions";

@Component({
  selector: 'app-profile-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './profile-header.component.html',
  styleUrl: './profile-header.component.scss'
})
export class ProfileHeaderComponent implements OnInit {

  @Input() profileName: string = 'Billie Eilish'; //todo: limit number of letter
  @Input() profileAboutMe: string = 'A sing-song-writer, producer, artist and an activist. Hope to get some new co-workers to get my ideas come true.'; //todo: limit number of letter
  @Input() numbersDisplayList: { label: string, number: number }[] = [
    {label: 'Projects', number: 67},
    {label: 'Believers', number: 90},
    // {label: 'Beliefs', number: 56}
  ];
  currentProfileId$: Observable<string>;
  displayedProfile$: Observable<Profile | null>;

  constructor(private store: Store) {
    this.currentProfileId$ = this.store.select(selectCurrentProfileId);
    this.displayedProfile$ = this.store.select(selectProfileFeature);
  }

  ngOnInit(): void {
    // const profileId = 'your-profile-id'; // Replace with the actual profileId
    // this.store.dispatch(ProfileActions.loadProfile({ profileId }));
  }

  profileClicked(id: string) {
    this.store.dispatch(ProjectActions.loadProjectsByProfileId({profileId: id}));
  }
}
