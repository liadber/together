import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {ProjectsComponent} from './projects/projects.component';
import {GridComponent} from './common/grid/grid.component';
import {GridCellComponent} from './common/grid/grid-cell/grid-cell.component';
import {ProfileComponent} from './common/profile/profile.component';
import {ProfileHeaderComponent} from './common/profile/profile-header/profile-header.component';
import {ProjectComponent} from './common/project/project.component';
import {ProjectGalleryComponent} from './common/project/project-gallery/project-gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProjectsComponent,
    GridComponent,
    GridCellComponent,
    ProfileComponent,
    ProfileHeaderComponent,
    ProjectComponent,
    ProjectGalleryComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
