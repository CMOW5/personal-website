import { Component, Input, OnInit } from '@angular/core';
import { Education } from 'src/app/personal-data';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  @Input()
  education!: Education[];

  constructor() { }

  ngOnInit(): void {
  }

}
