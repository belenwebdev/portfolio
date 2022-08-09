import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  private _current = new BehaviorSubject<string>('');
  public current$ = this._current.asObservable();

  private _selectedItem = new BehaviorSubject<string>('home');
  public selectedItem$ = this._selectedItem.asObservable();

  constructor() {}

  navegationPages(_current: string): void {
    this._current.next(_current);
  }

  selectItem(item: string): void {
    this._selectedItem.next(item);
  }
}
