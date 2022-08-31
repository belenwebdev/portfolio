import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

  projects = [
    {
      name: 'Quizzical',
      description: 'Quizzical is built on react and connects to an API to retrieve a series of trivial questions. Put your knowledge to a test and find out how many questions you can get right!',
      image:'quizzical.png',
      tags: ['html','css','react'],
      url:'https://quizzical-69f50.web.app/',
      github:'https://github.com/belenwebdev/react-course/tree/main/quizzical'
    },
    {
      name: 'Travel journal',
      description: 'This sample travel journal is built on read. It reads data from a file and displays using re-usable components.',
      image:'travel-journal.png',
      tags: ['html','css','react'],
      url:'https://travel-journal-8182e.web.app/',
      github:'https://github.com/belenwebdev/react-course/tree/main/travel-journal'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
