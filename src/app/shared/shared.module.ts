import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GridComponent} from './components/grid/grid.component';
import {ProfileHeaderComponent} from './components/profile-header/profile-header.component';
import {GridCellComponent} from './components/grid/grid-cell/grid-cell.component';



@NgModule({
  declarations: [
    GridComponent,
    GridCellComponent,
    ProfileHeaderComponent,
  ],
  exports:[
    GridComponent,
    ProfileHeaderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
