import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-other-input',
  templateUrl: './other-input.component.html',
  styleUrls: ['./other-input.component.scss']
})
export class OtherInputComponent implements OnInit {
  @Input() resumeModel: any;

  constructor() { }

  ngOnInit(): void {
  }

}
