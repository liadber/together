import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProjectPageComponent} from './pages/project-page/project-page.component';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  declarations: [
    ProjectPageComponent
  ],
  exports: [
    ProjectPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ProjectModule {
}
