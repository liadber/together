import {Component, OnInit} from '@angular/core';
import {GridCellComponent} from "./grid-cell/grid-cell.component";

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [GridCellComponent],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.scss'
})
export class GridComponent implements OnInit {

  // todo: input for the grid.
  constructor() {
  }

  ngOnInit(): void {
  }

}
