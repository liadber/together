import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.css']
})
export class ProjectPageComponent implements OnInit {

  @Input() editMode: boolean = true;

  constructor() {
  }

  ngOnInit(): void {
  }

}
