import {
  CurrencyPipe,
  DatePipe,
  LowerCasePipe,
  NgClass,
  NgFor,
  NgIf,
  NgStyle,
  NgSwitch,
  NgSwitchCase,
  NgSwitchDefault,
  PercentPipe,
  UpperCasePipe,
} from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TitleCasePipe } from './pipe/title-case.pipe';
import { ApiComponent } from './components/api/api.component';

@Component({
  selector: 'app-root',
  imports: [
    FormsModule,
    NgClass,
    NgStyle,
    NgIf,
    NgFor,
    NgSwitch,
    NgSwitchCase,
    NgSwitchDefault,
    UpperCasePipe,
    LowerCasePipe,
    DatePipe,
    PercentPipe,
    CurrencyPipe,
    TitleCasePipe,
    ApiComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'code2learn-Angular';
  myBtn: string = 'My Button';

  // attr binding
  isDisabled: boolean = true;

  // style binding
  bgColor: string = 'green';
  titleColor: string = 'white';
  description: string = 'font-size: 5@px; color: red';

  // class binding
  titleType = 'error';

  //function binding
  count = 0;
  incrementCount() {
    this.count++;
  }

  // 2 way data binding
  myNum = 0;

  // attribute directive
  message = 'Hello World';
  messageClass = 'greet';
  messageTextTransform = 'uppercase';

  // structural directive
  isLoggedIn = true;
  users = [
    { name: 'Alice', role: 'admin' },
    { name: 'Bob', role: 'editor' },
    { name: 'Charlie', role: 'viewer' },
    { name: 'Diana', role: 'admin' },
  ];

  // control flow
  // same example as above

  // pipe
  products = [
    {
      id: 1,
      name: 'SuperWidget',
      price: 499.99,
      discount: 0.15, // 15% discount
      launchDate: new Date('2023-12-01'),
      availability: 'IN STOCK',
      company: 'science finds',
    },
    {
      id: 2,
      name: 'MegaGadget',
      price: 299.49,
      discount: 0.2, // 20% discount
      launchDate: new Date('2024-01-15'),
      availability: 'OUT OF STOCK',
      company: 'tech corp',
    },
    {
      id: 3,
      name: 'SmartLamp',
      price: 89.9999,
      discount: 0.1, // 10% discount
      launchDate: new Date('2024-02-10'),
      availability: 'IN STOCK',
      company: 'go green',
    },
  ];
}
