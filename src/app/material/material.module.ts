import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [],
  imports: [
    MatCardModule,
    MatListModule,
    MatButtonModule
  ],
  exports: [
    MatCardModule,
    MatListModule,
    MatButtonModule
  ]
})
export class MaterialModule { }
