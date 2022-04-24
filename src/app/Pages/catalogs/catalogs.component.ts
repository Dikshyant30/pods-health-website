import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ImagePathService } from 'src/app/services/image-path.service';
import { PodHealthService } from 'src/app/services/pod-health.service';

@Component({
  selector: 'app-catalogs',
  templateUrl: './catalogs.component.html',
  styleUrls: ['./catalogs.component.scss'],
})
export class CatalogsComponent implements OnInit {
  catalogs: any = [];
  bannerImg!:string;
  title!:string;
  constructor(
    private _podService: PodHealthService,
    private router: Router,
    public _imgPath: ImagePathService
  ) {}

  ngOnInit(): void {
    this.getBannerByCategory();
    this.getCatalogs();
  }

  getCatalogs() {
    this._podService.getAllCatalogs().subscribe((res) => {
      this.catalogs = res.catList;
    });
  }
  getBannerByCategory() {
    this._podService
      .getAllBannerImagesByCat('9')
      .subscribe((res) => {
        this.bannerImg = res.content.BannerImagesListByCategoryID[0].bannerImageUrl;
        this.title = res.content.BannerImagesListByCategoryID[0].bannerTitle;
      });
  }
}
