import {Component, Input, OnInit} from '@angular/core';
import {GridCellComponent} from "./grid-cell/grid-cell.component";
import {Project} from "../../../../assets/models/project.model";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [CommonModule, GridCellComponent],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.scss'
})
export class GridComponent implements OnInit {

  @Input() projects: Project[] | null;

  constructor() {
  }

  ngOnInit(): void {
  }

  projectClicked(profileId: string) {

  }
}
