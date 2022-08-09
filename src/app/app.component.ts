import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { NavigationService } from './services/navigation.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

gsap.registerPlugin(ScrollTrigger);

const HOME = 'home';
const ABOUT = 'about';
const SKILLS = 'skills';
const WORK = 'work';
const CONTACT = 'contact';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy, AfterViewInit {

  private stop$ = new Subject<void>();

  @ViewChild(HOME, { static: true }) home: ElementRef;
  @ViewChild(ABOUT) about: ElementRef;
  @ViewChild(SKILLS) skills: ElementRef;
  @ViewChild(WORK) work: ElementRef;
  @ViewChild(CONTACT) contact: ElementRef;

  constructor(
    private readonly _navigationPages: NavigationService
  ) {}

  ngAfterViewInit(): void {}

  verificarIdElemtHtml(): void {
    const sections = [
      this.home,
      this.about,
      this.skills,
      this.work,
      this.contact
    ];
    const scrollY = window.pageYOffset;

    sections.forEach((element: ElementRef) => {
      if (element) {
        const current = element.nativeElement;
        const sectionId = current.id;
        const sectionHeight = current.offsetHeight;
        const offset = (sectionId === ABOUT || sectionId === WORK) ? 200 : 120;
        const sectionTop = current.offsetTop - offset;

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          this._navigationPages.selectItem(sectionId);
        }
      }
    });
  }

  ngOnInit() {
    this.changeEstadoNav();
    gsap.to('progress', {
      value: 100,
      scrollTrigger: {
        trigger: '.main',
        scrub: 0.3,
        start: 'top top',
        end: 'bottom bottom',
        onUpdate: () => {
            this.verificarIdElemtHtml();
        },
      },
    });
    setTimeout(() => {}, 1000);
  }

  ngOnDestroy(): void {
  }

  changeEstadoNav(): void {
    this._navigationPages.current$
      .pipe(takeUntil(this.stop$))
      .subscribe((current: string) => {
        switch (current) {
          case HOME:
            this.scrollTo(this.home);
            break;
          case ABOUT:
            this.scrollTo(this.about);
            break;
          case SKILLS:
            this.scrollTo(this.skills);
            break;
          case WORK:
            this.scrollTo(this.work);
            break;
          case CONTACT:
            this.scrollTo(this.contact);
            break;
        }
      });
  }

  scrollTo(elem : ElementRef) {
    const elementoNat = elem.nativeElement;
    elementoNat.scrollIntoView({ behavior: 'smooth' });
  }

  stop() : void {
    this.stop$.next();
    this.stop$.complete();
  }

}
