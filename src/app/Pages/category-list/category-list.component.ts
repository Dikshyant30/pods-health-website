import { Component, DoCheck, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { from } from 'rxjs';
import { filter, toArray } from 'rxjs/operators';
import { ImagePathService } from 'src/app/services/image-path.service';
import { NavigateService } from 'src/app/services/navigate.service';
import { PodHealthService } from 'src/app/services/pod-health.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss'],
})
export class CategoryListComponent implements OnInit, DoCheck {
  panelOpenState = false;
  allCategories: any = [];
  subCategories: any = [];
  subCatProds: any = [];
  categoryId!: string;
  categoryname!: string;
  showSubCatProd: boolean = false;
  savedUrl!: boolean;
  categories: any = [];
  subCats: any = [];
  catName: any = 'Select Category';
  subCatName: any = 'Select Subcategory';
  bannerImg!: string;
  title!: string;

  constructor(
    private _podService: PodHealthService,
    private route: ActivatedRoute,
    private router: Router,
    public _imgPath: ImagePathService,
    private _navigate: NavigateService,
    private sharedService: SharedService
  ) {
    this.sharedService.isCategoryChanged.subscribe(res => {
      if(res) {
        this.catName = localStorage.getItem('catName');
        this.allSubCategories();
        // setTimeout(()=>{
        //   // alert(this.catName);
        // },3000)
        // this.allCategoryList();
        // this.allSubCategories();
      }
    });
  }
  ngDoCheck() {

  }

  // ngOnChanges(): void {
  //   this.allCategoryList();
  //   this.allSubCategories();
  // }
  

  ngOnInit(): void {
    console.log('route::',this.route);
    this.getBannerByCategory();
    
    // this.categoryId = this._navigate.currentId;
    // this.categoryname = this._navigate.currentName;

    // this._navigate.currentId.subscribe((currentId:any) => {
    //   this.categoryId = currentId;
    // });
    // this._navigate.currentName.subscribe((currentName:any) => {
    //   this.categoryname = currentName;
    // });
    // console.log("id",this.categoryId);
    // console.log("name",this.categoryname);

    // this._navigate.catObj.subscribe((res: any) => {
    //   if (Object.keys(res).length) {
    //     this.categoryId = res['id'];
    //     this.categoryname = res['name'];
    //     this.allCategoryList();
    //     this.allSubCategories();
    //   } else {
    //     this.allCategoryList();
    //     this.allSubCategories();
    //   }
    // });

    // this.categoryId = this.route.snapshot.params['id'];
    // this.categoryname = this.route.snapshot.params.name;
    // if(this.categoryname) {
    //   alert("sajkdsa")
    //   this.catName = this.categoryname;
    //  console.log("mmmmmmmmmm",this.route.snapshot);

    // }
    console.log(localStorage.getItem('catName'));
    
    this.catName = localStorage.getItem('catName');
    console.log(this.catName);
    
    this.sharedService.triggeredsubCategory.subscribe((res) => {
      if (Object.keys(res).length) {
        this.subCatName = res['subCatname'];
      } else {
        this.subCatName = 'Select Subcategory';
      }
    });
    this.allCategoryList();
    this.allSubCategories();
    // this.allSubCategories();
  }

  allCategoryList() {
    this._podService.getCategoriesSubCategories().subscribe(
      (res) => {
        this.allCategories = res.CatList;

        console.log('jaskjjksjka', this.allCategories);

        // this.catalist = res.CatList;
        this.categories = this.allCategories;
        let source = from(this.categories);

        source
          .pipe(
            filter((data: any) => data.status === 'ACTIVE'),
            toArray()
          )
          .subscribe((ele) => {
            this.allCategories = ele;
            console.log('inside', this.allCategories);
          });

        // this.getSubCategoriesOnLoad(this.categoryId,this.categoryname,this.allCategories);
      },
      (err) => {}
    );
  }
  goToSubCategoryProducts(id: any, name: any) {
    this.router.navigate([
      '/productsList',
      this.categoryId,
      this.categoryname,
      name,
    ]);
    this._podService.getProductBySubCategory(id).subscribe(
      (res) => {
        this.subCatProds = res.productList;
        this.showSubCatProd = true;
      },
      (err) => {}
    );
  }
  // allSubCategories() {
  //   this._podService.getSubcategoriesCatId(this.categoryId).subscribe(
  //     (res) => {
  //       console.log(res);
  //       this.subCategories = res.subCatList;
  //     },
  //     (err) => {}
  //   );
  // }
  getProductDetails(id: any, name: any) {
    this._podService.getSubcategoriesCatId(id).subscribe(
      (res) => {
        this.subCategories = res.subCatList;
        //  this.router.navigate(['/productsList', id,name]);
      },
      (err) => {}
    );
  }

  getSubCategories(catId: any, name: any, subCat: any) {
    console.log('save url',this.savedUrl);
    
    if (this.savedUrl) {
      this.savedUrl = false;
      // document.getElementById("content")?.scrollIntoView();
      //  window.document.getElementById("content").scrollIntoView();
      this._navigate.updatePath({ id: catId, name: name });
      this.router.navigate(['productsList', catId, name]);
      this.catName = name;
      return;
    }
     else {
      this.subCatName = 'Select Subcategory';
      this.catName = name;
      this._navigate.updatePath({ id: catId, name: name });
      this.router.navigate(['productsList', catId, name]);
      this.subCats = subCat;
      // setTimeout(() => {
      // document.getElementById("content")?.scrollIntoView();
      // }, 600);
    }
  }

  getSubCategoyList(id: any, name: string) {
    this.savedUrl = true;
    this.subCatName = name;
    this._navigate.updateProductPath(id);
    this.router.navigate(['productsList', id]);
    document.getElementById('content')?.scrollIntoView();
  }
  goToContact() {
    this.router.navigate(['/contact']);
  }
  goToAbout() {
    this.router.navigate(['/about']);
  }
  goToCatalog() {
    this.router.navigate(['/catalogs']);
  }

  allSubCategories() {
    let id = localStorage.getItem('catId');

    this._podService.getSubcategoriesCatId(id).subscribe(
      (res) => {
        // this.noData = false;
        // alert(res);
        // console.log("222222222222222",res);
        this.subCategories = res.subCatList;
        let source = from(this.subCategories);
        source
          .pipe(
            filter((data: any) => data.subCategoryStatus === 'ACTIVE'),
            toArray()
          )
          .subscribe((ele) => {
            if (ele.length) {
              // this.noData = false;
              // ele.forEach((element:any) => {
              //   console.log("for each",element);
              //   // this.subCats = element.categoryName;
              // });
              // console.log("sub cats",ele);
              this.subCats = ele.map((e) => e);
              console.log('sub',this.subCats);
              
              //  console.log("sub cats",arr);

              //  this.subCats = arr;

              // this.subCats = ele.subCatList;
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

  getBannerByCategory() {
    this._podService
      .getAllBannerImagesByCat('3')
      .subscribe((res) => {
        this.bannerImg = res.content.BannerImagesListByCategoryID[0].bannerImageUrl;
        this.title = res.content.BannerImagesListByCategoryID[0].bannerTitle;        
      });
  }
}
