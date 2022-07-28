import { Component, OnInit } from '@angular/core';


export class Skill {
  constructor(public name:string, public image: string){
    this.name=name;
    this.image=image;
  }
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  skills: Skill [] = [];

  constructor() { }

  ngOnInit(): void {
    this.skills.push(new Skill("HTML","html.png"));
    this.skills.push(new Skill("CSS","css.png"));
    this.skills.push(new Skill("Javascript","js.png"));
    this.skills.push(new Skill("jQuery","jquery.png"));
    this.skills.push(new Skill("Sass","sass.png"));
    this.skills.push(new Skill("Angular","angular.svg"));
    this.skills.push(new Skill("React","react.png"));
    this.skills.push(new Skill("Java","java.png"));
    this.skills.push(new Skill("Spring","spring.png"));
    this.skills.push(new Skill("Mongo","mongo.png"));
    this.skills.push(new Skill("SQL","database.png"));
    this.skills.push(new Skill("Git","git.png"));
    this.skills.push(new Skill("Scrum","scrum.png"));
    this.skills.push(new Skill("Figma","figma.png"));
  }

}
