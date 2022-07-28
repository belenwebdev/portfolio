import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  activePage: string = 'home';
  @Output() activePageEmitter = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  navigateTo(page: string) {
    this.activePage=page;
    this.activePageEmitter.emit(page);
  }

}
