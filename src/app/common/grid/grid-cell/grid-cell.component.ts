import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-grid-cell',
  templateUrl: './grid-cell.component.html',
  styleUrls: ['./grid-cell.component.css']
})
export class GridCellComponent implements OnInit {

  @Input()
  daysLeftNote: string;

  constructor() { }

  ngOnInit(): void {
  }

}
