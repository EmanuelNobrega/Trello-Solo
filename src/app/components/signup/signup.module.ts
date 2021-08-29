import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup.component';
import { FormsModule } from '@angular/forms';
import { MatCard } from '@angular/material/card';

@NgModule({
  declarations: [SignupComponent],
  imports: [
    FormsModule,
    CommonModule,
    MatCard
  ]
})
export class SignupModule { }
