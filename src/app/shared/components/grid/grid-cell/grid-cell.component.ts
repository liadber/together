import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-grid-cell',
  standalone: true,
  imports: [],
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
