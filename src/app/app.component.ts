import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  navigateTo(page: string) {
    let el = document.getElementById(page);
    if ( el!=null ) el.scrollIntoView();
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    console.log(window.scrollY);
    const maxHeight = document.getElementById('home')?.offsetHeight;
    console.log('max height',maxHeight);
    if(!maxHeight) return;
    if(window.scrollY>maxHeight){
      console.log('unfix navbar')
      document.getElementsByClassName('navbar')[0].classList.add('fixed-top');
    }
    else {
      console.log('FIX navbar')
      document.getElementsByClassName('navbar')[0].classList.remove('fixed-top');
    }

  }

}
