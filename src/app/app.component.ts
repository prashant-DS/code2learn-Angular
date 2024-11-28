import {
  NgClass,
  NgFor,
  NgIf,
  NgStyle,
  NgSwitch,
  NgSwitchCase,
  NgSwitchDefault,
} from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
}
