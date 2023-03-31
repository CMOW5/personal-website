import { Component } from '@angular/core';
import { PERSONAL_DATA } from './my-personal-data-feed';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public personalData = PERSONAL_DATA;
}
