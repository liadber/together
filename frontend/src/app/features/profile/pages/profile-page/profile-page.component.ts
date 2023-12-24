import {Component, OnInit} from '@angular/core';
import {GridComponent} from "../../../../shared/components/grid/grid.component";
import {ProfileHeaderComponent} from "../../../../shared/components/profile-header/profile-header.component";
import {Store} from "@ngrx/store";
import {selectProjectsGrid} from "../../../../store/project-store/project.selectors";
import {Project} from "../../../../../assets/models/project.model";
import {Observable} from "rxjs";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [ProfileHeaderComponent, GridComponent, CommonModule],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.scss'
})
export class ProfilePageComponent implements OnInit {
  projectsGrid$: Observable<Project[]>;

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.projectsGrid$ = this.store.select(selectProjectsGrid);
  }
}
