import { Component, Input, OnInit } from '@angular/core';
import { Languages } from 'src/app/personal-data';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss']
})
export class LanguagesComponent implements OnInit {

  @Input()
  languages!: Languages[];

  constructor() { }

  ngOnInit(): void {
  }

}
