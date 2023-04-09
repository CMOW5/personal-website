import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PersonalData } from './personal-data';

const PERSONAL_DATA_URL = 'https://dzqumxegoj3l9.cloudfront.net/personal-data.json'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public personalData!:PersonalData;

  constructor(private http: HttpClient) { 
  
  }
  
  ngOnInit(): void {
    this.http.get<PersonalData>(PERSONAL_DATA_URL).subscribe(personalData => {
      this.personalData = personalData;
    })
  }

  
  
}
