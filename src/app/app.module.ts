import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProjectsComponent } from './projects/projects.component';
import { GridComponent } from './common/grid/grid.component';
import { GridCellComponent } from './common/grid/grid-cell/grid-cell.component';
import { ProfileComponent } from './common/profile/profile.component';
import { ProfileHeaderComponent } from './common/profile/profile-header/profile-header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProjectsComponent,
    GridComponent,
    GridCellComponent,
    ProfileComponent,
    ProfileHeaderComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
