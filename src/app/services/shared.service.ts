import { MatDrawer } from '@angular/material/sidenav';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class SharedService {
  public triggeredroute: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);
  public triggeredsubCategory: BehaviorSubject<any> = new BehaviorSubject<any>(
    {}
  );
  public triggeredtitle: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);

  public isCategoryChanged:BehaviorSubject<boolean> = new BehaviorSubject<any>(false);

  constructor(private http: HttpClient) {}

  changeRoute(message: any) {
    console.log(message);

    this.triggeredroute.next(message);
  }
  changeSubCategory(message: any) {
    this.triggeredsubCategory.next(message);
  }
  changeTitle(message: any) {
    this.triggeredtitle.next(message);
  }
  changeCategory(val: boolean) {
    this.isCategoryChanged.next(val);
  }
}
