import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile-input',
  templateUrl: './user-profile-input.component.html',
  styleUrls: ['./user-profile-input.component.scss']
})
export class UserProfileInputComponent implements OnInit {
  @Input() resumeModel: any;

  constructor() { }

  ngOnInit(): void {
  }

}
