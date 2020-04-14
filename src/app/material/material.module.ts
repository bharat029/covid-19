import { NgModule } from '@angular/core';
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatDividerModule } from "@angular/material/divider";
import { MatListModule } from "@angular/material/list";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";

const materialModules = [
  MatSidenavModule,
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatDividerModule,
  MatListModule,
  MatFormFieldModule,
  MatInputModule,
];

@NgModule({
  imports: [materialModules],
  exports: [materialModules]
})
export class MaterialModule { }
