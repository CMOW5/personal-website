import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PersonalData } from './personal-data';
import { environment } from '../environments/environment';

const PERSONAL_DATA_URL = 'https://dzqumxegoj3l9.cloudfront.net/personal-data.json' + '?v=' + environment.buildVersion // cache bust after a release

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public personalData!:PersonalData;

  constructor(private http: HttpClient) { 
    console.log('Build version:', environment.buildVersion);
  }
  
  ngOnInit(): void {
    this.http.get<PersonalData>(PERSONAL_DATA_URL).subscribe(personalData => {
      this.personalData = personalData;
    })
  }

  
  
}
