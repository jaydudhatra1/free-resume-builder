import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience-input',
  templateUrl: './experience-input.component.html',
  styleUrls: ['./experience-input.component.scss']
})
export class ExperienceInputComponent implements OnInit {
  @Input() resumeModel: any;

  constructor() { }

  ngOnInit(): void {
  }

}
