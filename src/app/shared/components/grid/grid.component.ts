import {Component, Input, OnInit} from '@angular/core';
import {GridCellComponent} from "./grid-cell/grid-cell.component";
import {Project} from "../../../../assets/models/project.model";
import {CommonModule} from "@angular/common";
import {Store} from "@ngrx/store";
import {ProjectActions} from "../../../store/project-store/project.actions";
import {RouterLink} from "@angular/router";
import {ProfileActions} from "../../../store/profile-store/profile.actions";

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [RouterLink, CommonModule, GridCellComponent],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.scss'
})
export class GridComponent implements OnInit {

  @Input() projects: Project[] | null;

  constructor(private store: Store) {
  }

  ngOnInit(): void {
  }

  projectClicked(project: Project) {
    this.store.dispatch(ProjectActions.loadCurrentProject({currentProject: project}));
    this.store.dispatch(ProfileActions.loadProfile({profileId: project.profileId}));
  }
}
