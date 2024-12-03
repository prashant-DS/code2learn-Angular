import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

interface User {
  name: string;
  age?: number;
}

@Component({
  selector: 'app-template-driven-form',
  imports: [FormsModule],
  templateUrl: './template-driven-form.component.html',
})
export class TemplateDrivenFormComponent {
  user: User = {
    name: '',
  };

  submitForm(ngForm: NgForm) {
    if (ngForm.valid) {
      console.log('Form submitted', this.user);
    }
  }
}
