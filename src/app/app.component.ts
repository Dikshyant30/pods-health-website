import { Component, HostListener } from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  NavigationStart,
  Router,
} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'PodHealth-FE';
  isShow!: boolean;
  topPosToStartShowing = 100;
  url!: any;
  showThanks!: boolean;
  // @HostListener('window:scroll')

  constructor(private router: Router, private route: ActivatedRoute) {}
  ngOnInit() {
    this.url = window.location.href;
    if (this.url.includes('thankyou')) {
      this.showThanks = true;
    } else {
      this.showThanks = false;
    }

    //   this.router.events.subscribe((event) => {
    //     if (!(event instanceof NavigationEnd)) {
    //         return;
    //     }
    //     window.scrollTo(10, 10)
    // });
  }
}
