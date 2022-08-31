import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-card',
  templateUrl: './work-card.component.html',
  styleUrls: ['./work-card.component.scss']
})
export class WorkCardComponent implements OnInit {
  @Input() project;

  constructor() { }

  ngOnInit(): void {
    console.log('project', this.project);
  }

}
