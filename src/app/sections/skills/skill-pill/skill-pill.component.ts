import { Component, Input, OnInit } from '@angular/core';
import { Skill } from '../skills.component';

@Component({
  selector: 'app-skill-pill',
  templateUrl: './skill-pill.component.html',
  styleUrls: ['./skill-pill.component.scss']
})
export class SkillPillComponent implements OnInit {

  @Input() skill: Skill = new Skill('','');

  constructor() { }

  ngOnInit(): void {
  }

}
