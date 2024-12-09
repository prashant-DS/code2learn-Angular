import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

interface User {
  name: string;
  age: number;
}

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule, NgFor],
  templateUrl: './reactive-form.component.html',
})
export class ReactiveFormComponent {
  myForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.myForm = formBuilder.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
      address: formBuilder.group({
        street: ['', Validators.required],
        city: ['', Validators.required],
        state: ['', Validators.required],
        zip: ['', [Validators.required, Validators.pattern(/^\d{6}$/)]],
      }),
      phoneNumbers: formBuilder.array([
        formBuilder.control('', [
          Validators.required,
          Validators.pattern(/^\d{10}$/),
        ]),
      ]),
    });
  }

  get phoneNumbers() {
    return this.myForm.get('phoneNumbers') as FormArray;
  }

  addPhoneNumber() {
    this.phoneNumbers.push(
      this.formBuilder.control('', [
        Validators.required,
        Validators.pattern(/^\d{10}$/),
      ])
    );
  }

  removePhoneNumber(index: number) {
    this.phoneNumbers.removeAt(index);
  }

  submitForm() {
    console.log(this.myForm.valid, this.myForm);
  }
}
