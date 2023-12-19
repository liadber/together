import {Component, Input, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-grid-cell',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './grid-cell.component.html',
  styleUrl: './grid-cell.component.scss'
})
export class GridCellComponent implements OnInit{

  @Input()
  daysLeftNote: string;

  constructor() {
  }

  ngOnInit(): void {
  }
}
