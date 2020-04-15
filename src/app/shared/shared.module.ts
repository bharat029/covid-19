import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [ LoadingSpinnerComponent ],
  imports: [ CommonModule, MaterialModule ],
  exports: [ LoadingSpinnerComponent, MaterialModule ],
})
export class SharedModule { }
