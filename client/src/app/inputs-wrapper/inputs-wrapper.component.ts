import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-inputs-wrapper',
  templateUrl: './inputs-wrapper.component.html',
  styleUrls: ['./inputs-wrapper.component.scss']
})
export class InputsWrapperComponent implements OnInit {
  @Input() resumeModel: any;

  constructor() { }

  ngOnInit(): void {
  }

}
