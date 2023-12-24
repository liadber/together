import {Component, OnInit} from '@angular/core';
import {GridComponent} from "../../../../shared/components/grid/grid.component";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {Project} from "../../../../../assets/models/project.model";
import {selectProjectsGrid} from "../../../../store/project-store/project.selectors";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-explore-page',
  standalone: true,
  imports: [GridComponent, CommonModule],
  templateUrl: './explore-page.component.html',
  styleUrl: './explore-page.component.scss'
})
export class ExplorePageComponent implements OnInit {
  projectsGrid$: Observable<Project[]>;

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.projectsGrid$ = this.store.select(selectProjectsGrid);
  }
}
