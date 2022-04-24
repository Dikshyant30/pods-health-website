import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ImagePathService } from 'src/app/services/image-path.service';
import { PodHealthService } from 'src/app/services/pod-health.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  bannerImg!:string;
  title!: string;
  constructor(private router:Router,private _podService:PodHealthService, public _imgPath: ImagePathService) { }

  ngOnInit(): void {
    this.getBannerByCategory();
  }

  goToContacts() {
    this.router.navigate(['/contact']);
  }
  getBannerByCategory() {
    this._podService
      .getAllBannerImagesByCat('2')
      .subscribe((res) => {
        this.bannerImg = res.content.BannerImagesListByCategoryID[0].bannerImageUrl;
        this.title = res.content.BannerImagesListByCategoryID[0].bannerTitle;
      });
  }

}
