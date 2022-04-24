import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  hideSearchBar: boolean = true;
  title: any = 'Home';

  constructor(private sharedService: SharedService) {
    if (localStorage.getItem('title')) {
      this.title = localStorage.getItem('title');
    } else {
      this.title = 'Home';
    }
    this.sharedService.triggeredtitle.subscribe((val) => {
      if (val) {
        if (localStorage.getItem('title')) {
          this.title = localStorage.getItem('title');
        } else {
          this.title = 'Home';
        }
      }
    });
  }

  ngOnInit(): void {
    // this.title = localStorage.getItem('title');
  }

  openSearch() {
    this.hideSearchBar = !this.hideSearchBar;
  }

  getTitle(data: string) {
    this.title = localStorage.setItem('title', data);
    this.title = localStorage.getItem('title');
  }
  goToHome() {
    localStorage.removeItem('title');
    this.title = 'Home';
  }
}
