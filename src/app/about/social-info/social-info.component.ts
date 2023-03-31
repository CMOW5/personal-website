import { Component, Input, OnInit } from '@angular/core';
import { Social } from 'src/app/personal-data';

@Component({
  selector: 'app-social-info',
  templateUrl: './social-info.component.html',
  styleUrls: ['./social-info.component.scss']
})
export class SocialInfoComponent implements OnInit {

  @Input()
  social!: Social[];

  constructor() { }

  ngOnInit(): void {
  }

}
