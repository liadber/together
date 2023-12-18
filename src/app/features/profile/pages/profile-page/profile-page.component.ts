import {Component, OnInit} from '@angular/core';
import {GridComponent} from "../../../../shared/components/grid/grid.component";
import {ProfileHeaderComponent} from "../../../../shared/components/profile-header/profile-header.component";

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [ProfileHeaderComponent, GridComponent],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.scss'
})
export class ProfilePageComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
