import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

  projects = [
    {
      name: 'Rock Paper Scissors',
      description: 'Play Rock Paper Scissors against a computer. Win points every time you win, but... Be careful! You will lose points if the house wins.',
      image:'rock-paper-scissors.png',
      tags: ['html','css','react'],
      url:'https://rock-paper-scissors-d6397b.netlify.app/',
      github:'https://github.com/belenwebdev/rock-paper-scissors'
    },
    {
      name: 'Tip calculator',
      description: 'This tip calculator is built on React and will let you split a bill and tip among a group of people. It is fully responsive and operational.',
      image:'tip-calculator.png',
      tags: ['html','css','react'],
      url:'https://tip-calculator-9de5c7.netlify.app/',
      github:'https://github.com/belenwebdev/tip-calculator'
    },
    {
      name: 'Quizzical',
      description: 'Quizzical is built on react and connects to an API to retrieve a series of trivial questions. Put your knowledge to a test and find out how many questions you can get right!',
      image:'quizzical.png',
      tags: ['html','css','react'],
      url:'https://quizzical-69f50.web.app/',
      github:'https://github.com/belenwebdev/react-course/tree/main/quizzical'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
