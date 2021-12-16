import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  public sidebarStatus: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  constructor() { }

  get status() {
    return this.sidebarStatus.asObservable();
  }

  set statusData(status: boolean) {
    this.sidebarStatus.next(status);
  }
}
