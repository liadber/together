import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {NavbarComponent} from './core/components/navbar/navbar.component';
import {ExploreModule} from './features/explore/explore.module';
import {ProfileModule} from './features/profile/profile.module';
import {ProjectModule} from './features/project/project.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
  ],
  imports: [
    ProfileModule,
    ProjectModule,
    ExploreModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
