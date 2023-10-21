import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {NavbarComponent} from './core/components/navbar/navbar.component';
import {GridComponent} from './shared/components/grid/grid.component';
import {GridCellComponent} from './shared/components/grid/grid-cell/grid-cell.component';
import {ProfileComponent} from './features/components/profile/profile.component';
import {ProfileHeaderComponent} from './shared/components/profile-header/profile-header.component';
import {ProjectComponent} from './features/components/project/project.component';
import {ExploreComponent} from './features/components/explore/explore.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GridComponent,
    GridCellComponent,
    ProfileComponent,
    ProfileHeaderComponent,
    ProjectComponent,
    ExploreComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
