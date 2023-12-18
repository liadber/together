import {Component, OnInit} from '@angular/core';
import {GridComponent} from "../../../../shared/components/grid/grid.component";

@Component({
  selector: 'app-explore-page',
  standalone: true,
  imports: [GridComponent],
  templateUrl: './explore-page.component.html',
  styleUrl: './explore-page.component.scss'
})
export class ExplorePageComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }
}
