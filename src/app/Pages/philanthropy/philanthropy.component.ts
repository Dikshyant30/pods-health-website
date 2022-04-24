import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImagePathService } from 'src/app/services/image-path.service';
import { PodHealthService } from 'src/app/services/pod-health.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-philanthropy',
  templateUrl: './philanthropy.component.html',
  styleUrls: ['./philanthropy.component.scss'],
})
export class PhilanthropyComponent implements OnInit {
  bannerImg!:string;
  title!:string;
  constructor(
    private route: ActivatedRoute,
    private sharedService: SharedService,
    private _podService:PodHealthService,
    public _imgPath: ImagePathService
  ) {}

  ngOnInit(): void {
    this.getBannerByCategory();
    if (this.route.snapshot['routeConfig']?.path?.includes('philanthropy')) {
      localStorage.setItem('title', 'Philanthropy');
      this.sharedService.changeTitle(true);
    }
  }
  getBannerByCategory() {
    this._podService
      .getAllBannerImagesByCat('6')
      .subscribe((res) => {
        this.bannerImg = res.content.BannerImagesListByCategoryID[0].bannerImageUrl;
        this.title = res.content.BannerImagesListByCategoryID[0].bannerTitle;
      });
  }
}
