import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ImagePathService } from 'src/app/services/image-path.service';
import { PodHealthService } from 'src/app/services/pod-health.service';

@Component({
  selector: 'app-best-selling-products',
  templateUrl: './best-selling-products.component.html',
  styleUrls: ['./best-selling-products.component.scss']
})
export class BestSellingProductsComponent implements OnInit {

  subCategories: any = [];
  bestProds:any = [];
  contents: any = [];


  constructor(
    private _podService: PodHealthService,
    private route: ActivatedRoute,
    private router: Router,
    public _imgPath: ImagePathService
  ) {}

  ngOnInit(): void {
    this.getBestProducts();
  }

  getBestProducts() {
    this._podService.getAllBestSellingProducts().subscribe(res=>{
      this.bestProds = res.BestProductList.content;
      // this.bestProds = this.contents.content;
      console.log("saaaaaaaaaaa",res);
      
    })
  }

  goToProductDetails(id: any) {
    this.router.navigate(['/productsDetails', id]);
  }
}
