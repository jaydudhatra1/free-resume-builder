import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills-input',
  templateUrl: './skills-input.component.html',
  styleUrls: ['./skills-input.component.scss']
})
export class SkillsInputComponent implements OnInit {
  @Input() resumeModel: any;

  constructor() { }

  ngOnInit(): void {
  }

}
