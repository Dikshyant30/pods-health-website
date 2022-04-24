import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent implements OnInit {
  podUrl!: SafeResourceUrl;
  constructor(private _sanitizer: DomSanitizer, private router: Router,private route:ActivatedRoute,private sharedService:SharedService) {}

  ngOnInit(): void {
    if (this.route.snapshot['routeConfig']?.path?.includes('about')) {
      localStorage.setItem('title', 'About Us');
      this.sharedService.changeTitle(true);

    }
    this.podUrl = this._sanitizer.bypassSecurityTrustResourceUrl(
      'https://youtu.be/Gw_nay2FbQQ'
    );
  }
  goToContacts() {
    this.router.navigate(['/contact']);
  }
  goToProduct() {
    this.router.navigate(['/products']);
  }
}
