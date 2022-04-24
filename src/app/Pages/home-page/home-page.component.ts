import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ImagePathService } from 'src/app/services/image-path.service';
import { PodHealthService } from 'src/app/services/pod-health.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  bannerImgs: any = [];
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private sharedService: SharedService,
    private _podService: PodHealthService,
    public _imgPath: ImagePathService
  ) {}

  ngOnInit(): void {
    this.getBannerByCategory();
    if (this.route.snapshot['routeConfig']?.path?.includes('')) {
      localStorage.setItem('title', 'Home');
      this.sharedService.changeTitle(true);
    }
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(10, 10);
    });
  }

  goToCatalog() {
    this.router.navigate(['/catalogs']);
  }
  getBannerByCategory() {
    this._podService
      .getAllBannerImagesByCat('1')
      .subscribe((res) => {
        this.bannerImgs = res.content.BannerImagesListByCategoryID;
        console.log("imggggg",this.bannerImgs);
        
      });
  }
}
