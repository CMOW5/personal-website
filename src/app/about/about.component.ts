import { Component, Input, OnInit } from '@angular/core';
import { Social } from '../personal-data';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  @Input()
  avatar!: string;

  @Input()
  name!: string;

  @Input()
  profession!: string;

  @Input()
  bio!: string;

  @Input()
  address!: string;

  @Input()
  social!: Social[];

  constructor() { }

  ngOnInit(): void {
  }

}
