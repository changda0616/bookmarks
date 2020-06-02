import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PplListRoutingModule } from './ppl-list-routing.module';
import { ListItemComponent } from './list-item/list-item.component';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [ListItemComponent, ListComponent],
  imports: [
    CommonModule,
    PplListRoutingModule
  ]
})
export class PplListModule { }
