import {
  AfterViewInit,
  Component,
  HostListener,
  OnChanges,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { from, Subscription } from 'rxjs';
import { filter, toArray } from 'rxjs/operators';
import { ImagePathService } from 'src/app/services/image-path.service';
import { NavigateService } from 'src/app/services/navigate.service';
import { PodHealthService } from 'src/app/services/pod-health.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.scss'],
})
export class SubCategoryComponent implements OnInit, OnDestroy {
  subCategories: any = [];
  categoryId!: string;
  categoryname!: string;
  allCategories: any = [];
  subscriptionId!: Subscription;
  subscriptionName!: Subscription;
  noData: boolean = false;
  routeDetails: any;
  constructor(
    private _podService: PodHealthService,
    private route: ActivatedRoute,
    private router: Router,
    public _imgPath: ImagePathService,
    private _navigate: NavigateService,
    private sharedService: SharedService
  ) {
    this.categoryId = this.route.snapshot.params.id;
    this.categoryname = this.route.snapshot.params.name;
  }

  ngOnInit(): void {
    this.routeDetails = this.route.params;
    if (this.routeDetails['_value'].hasOwnProperty('name')) {
      this.sharedService.changeSubCategory({});
    }
    this.allCategoryList();
    this._navigate.catObj.subscribe((res: any) => {
      if (Object.keys(res).length) {
        this.categoryId = res['id'];
        this.categoryname = res['name'];
        this.allCategoryList();
        this.allSubCategories();
      } else {
        this.allCategoryList();
        this.allSubCategories();
      }
    });

    // this.subscriptionId = this._navigate.currentId.subscribe((currentId: any) => {
    //   this.categoryId = currentId;
    // });
    // this.subscriptionName = this._navigate.currentName.subscribe((currentName: any) => {
    //   this.categoryname = currentName;
    // });
    // console.log('id', this.categoryId);
    // console.log('name', this.categoryname);

    // this.allSubCategories();
  }

  allSubCategories() {
    this._podService.getSubcategoriesCatId(this.categoryId).subscribe(
      (res) => {
        console.log(res);
        this.subCategories = res.subCatList;

        if (!this.subCategories.length) {
          setTimeout(() => {
            this.noData = true;
          }, 1000);
        }
        let source = from(this.subCategories);
        source
          .pipe(
            filter((data: any) => data.subCategoryStatus === 'ACTIVE'),
            toArray()
          )
          .subscribe((ele) => {
            if (ele.length) {
              // this.noData = false;
              this.subCategories = ele;
            } else {
              // this.noData = true;
            }
          });
      },
      (err) => {
        // this.noData = true;
      }
    );
  }

  // goToSubCategoryProducts(id: any, name: any) {
  //   this.router.navigate([
  //     '/productsList',
  //     this.categoryId,
  //     this.categoryname,
  //     name,
  //   ]);
  //    this._podService.getProductBySubCategory(id).subscribe(
  //      (res) => {
  //        this.subCatProds = res.productList;
  //        this.showSubCatProd = true;

  //      },
  //      (err) => {}
  //    );
  // }

  goToSubCatList(id: any, name: any) {
    // console.log("d",product);
    // console.log("d",name);
    // localStorage.setItem("subCatName",name);
    this.sharedService.changeSubCategory({ subCatname: name });
    this._navigate.updateProductPath(id);
    this.router.navigate(['productsList', id]);
  }

  allCategoryList() {
    this._podService.getCategoriesSubCategories().subscribe(
      (res) => {
        this.allCategories = res.CatList;
      },
      (err) => {}
    );
  }

  ngOnDestroy() {
    // if (this.subscriptionId || this.subscriptionName) {
    //   this.subscriptionId.unsubscribe();
    //   this.subscriptionName.unsubscribe();
    // }
  }
}
