import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MenuComponent} from './menu/menu.component';
import {ProjectsComponent} from './projects/projects.component';
import {GridComponent} from './common/grid/grid.component';
import {GridCellComponent} from './common/grid/grid-cell/grid-cell.component';
import {ProfileComponent} from './common/profile/profile.component';
import {ProfileHeaderComponent} from './common/profile/profile-header/profile-header.component';
import {ProjectComponent} from './common/project/project.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ProjectsComponent,
    GridComponent,
    GridCellComponent,
    ProfileComponent,
    ProfileHeaderComponent,
    ProjectComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
