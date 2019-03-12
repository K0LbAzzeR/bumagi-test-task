import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorizationComponent } from './authorization.component';

import {
  MatCardModule,
  MatInputModule,
  MatFormFieldModule,
  MatButtonModule,
  MatIconModule,
  MatToolbarModule
} from '@angular/material';
//
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AuthorizationComponent
  ],
  imports: [
    CommonModule,
    // CustomMaterialModule,
    ReactiveFormsModule,
    // MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    // MatIconModule,
    // MatToolbarModule
  ]
})
export class AuthorizationModule { }
