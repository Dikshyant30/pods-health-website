import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { from, Subscription } from 'rxjs';
import { filter, toArray } from 'rxjs/operators';
import { ImagePathService } from 'src/app/services/image-path.service';
import { NavigateService } from 'src/app/services/navigate.service';
import { PodHealthService } from 'src/app/services/pod-health.service';

@Component({
  selector: 'app-sub-category-list',
  templateUrl: './sub-category-list.component.html',
  styleUrls: ['./sub-category-list.component.scss'],
})
export class SubCategoryListComponent implements OnInit {
  subCatProds: any;
  subCategoryId!: string;
  subCategoryName!: string;
  subscriptionId!: Subscription;
  subscriptionName!: Subscription;
  noData: boolean = false;

  constructor(
    private _podService: PodHealthService,
    private router: Router,
    public _imgPath: ImagePathService,
    private _navigate: NavigateService,
    private route: ActivatedRoute
  ) {
    this.subCategoryId = this.route.snapshot.params.id;
  }

  ngOnInit(): void {
    this._navigate.currentProdId.subscribe((currentProdId: any) => {
      console.log('currentProdId', currentProdId);

      if (currentProdId) {
        this.subCategoryId = currentProdId;
        this.goToSubCategoryProducts(this.subCategoryId);
      } else {
        this.goToSubCategoryProducts(this.subCategoryId);
      }
    });
  }

  goToSubCategoryProducts(id: any) {
    this._podService.getProductBySubCategory(id).subscribe(
      (res) => {
        if (res) {
          this.subCatProds = res.productList;
          console.log('ressss', res);

          if (!this.subCatProds.length) {
            setTimeout(() => {
              this.noData = true;
            }, 1000);
          }
          let source = from(this.subCatProds);
          source
            .pipe(
              filter((data: any) => data.status === 'ACTIVE'),
              toArray()
            )
            .subscribe((ele) => {
              if (ele.length) {
                this.subCatProds = ele;
              } else {
              }
            });
        } else {
          this.subCatProds = null;
          if (!this.subCatProds) {
            setTimeout(() => {
              this.noData = true;
            }, 1000);
          }
        }
      },
      (err) => {}
    );
  }

  goToProductDetails(id: any) {
    this.router.navigate(['/productsDetails', id]);
  }
}
