import { NgModule } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [],
  imports: [
   
  ],
  exports:[
    MatInputModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatCardModule
  ]
})
export class MaterialModule { }
