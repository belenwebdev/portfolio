import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  private stop$ = new Subject<void>();
  public showMenu: boolean = false;
  public currentSection: string = 'home';
  public isMenuOpen = false;

  public sections = ['home', 'about','skills', 'work', 'contact'];

  constructor(
    private readonly _navigationService: NavigationService
  ) {}

  ngOnInit(): void {
    this.trackChanges();
  }
  ngOnDestroy(): void {
    this.stop();
  }

  navigateTo(target: string): void {
    this.showMenu = false;
    this.currentSection = target;
    this.isMenuOpen = false;
    this._navigationService.navegationPages(target);
  }

  trackChanges(): void {
    this._navigationService.selectedItem$
      .pipe(takeUntil(this.stop$))
      .subscribe((target: string) => {
        this.currentSection = target;
      });
  }

  openAndCloseMenu(): void {
    this.showMenu = !this.showMenu;
  }

  stop(): void {
    this.stop$.next();
    this.stop$.complete();
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

}
