// Angular modules
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// Pipes



const _modules = [
  CommonModule,
  RouterModule,
  FormsModule,
  ReactiveFormsModule
];

const _declarations: never[] = [];

@NgModule({
  declarations: [..._declarations],
  imports: [..._modules],
  exports: [..._declarations, ..._modules]
})
export class SharedModule {}
