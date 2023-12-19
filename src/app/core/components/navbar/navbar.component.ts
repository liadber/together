import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {RouterLink} from "@angular/router";
// import {Store} from "@ngrx/store";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  ngOnInit() {

  }
}
