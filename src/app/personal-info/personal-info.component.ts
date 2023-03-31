import { Component, Input, OnInit } from '@angular/core';
import { Education, Experience, Languages, Skills } from '../personal-data';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit {

  @Input()
  education!: Education[];

  @Input()
  experience!:  Experience[];
  
  @Input()
  
  skills!: Skills[];
  
  @Input()
  languages!: Languages[];

  constructor() { }

  ngOnInit(): void {
  }

}
