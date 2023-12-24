import {Routes} from '@angular/router';
import {ExplorePageComponent} from "./features/explore/pages/explore-page/explore-page.component";
import {ProfilePageComponent} from "./features/profile/pages/profile-page/profile-page.component";
import {ProjectPageComponent} from "./features/project/pages/project-page/project-page.component";

export const routes: Routes = [
  {path: 'explore', component: ExplorePageComponent},
  {path: 'profile', component: ProfilePageComponent},
  {path: 'project', component: ProjectPageComponent},
];
