import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ImagePathService } from 'src/app/services/image-path.service';
import { PodHealthService } from 'src/app/services/pod-health.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-cunsult-services',
  templateUrl: './cunsult-services.component.html',
  styleUrls: ['./cunsult-services.component.scss'],
})
export class CunsultServicesComponent implements OnInit {
  bannerImg!:string;
  title!:string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private _podService:PodHealthService,
    private sharedService: SharedService,
    public _imgPath: ImagePathService) {}

  ngOnInit(): void {
    this.getBannerByCategory();
    if (this.route.snapshot['routeConfig']?.path?.includes('consultationRegistration')) {
      localStorage.setItem('title', 'Consult Services');
      this.sharedService.changeTitle(true);

    }
  }

  openConsultForm(type: string) {
    localStorage.setItem('consultFormType', type);
    this.router.navigate(['/consultform']);
  }
  getBannerByCategory() {
    this._podService
      .getAllBannerImagesByCat('4')
      .subscribe((res) => {
        this.bannerImg = res.content.BannerImagesListByCategoryID[0].bannerImageUrl;
        this.title = res.content.BannerImagesListByCategoryID[0].bannerTitle;        
      });
  }
}
