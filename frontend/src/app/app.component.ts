import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {ProjectPageComponent} from "./features/project/pages/project-page/project-page.component";
import {NavbarComponent} from "./core/components/navbar/navbar.component";
import {Store} from "@ngrx/store";
import {AppActions} from "./store/actions";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    ProjectPageComponent,
    NavbarComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  constructor(private store: Store) {
  }

  ngOnInit(): void {
    // Dispatch the action when the component is initialized
    this.store.dispatch(AppActions.getCurrentProfileId());
  }
}
