import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ExplorePageComponent} from './pages/explore-page/explore-page.component';
import {SharedModule} from '../../shared/shared.module';


@NgModule({
  declarations: [
    ExplorePageComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ExploreModule {
}
