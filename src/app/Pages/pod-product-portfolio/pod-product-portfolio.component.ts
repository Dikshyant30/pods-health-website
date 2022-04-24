import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ImagePathService } from 'src/app/services/image-path.service';
import { NavigateService } from 'src/app/services/navigate.service';
import { PodHealthService } from 'src/app/services/pod-health.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-pod-product-portfolio',
  templateUrl: './pod-product-portfolio.component.html',
  styleUrls: ['./pod-product-portfolio.component.scss'],
})
export class PodProductPortfolioComponent implements OnInit {
  products: any = [];
  categories: any = [];
  catalist: any = [];
  bannerImgs: any = [];
  constructor(
    private _podService: PodHealthService,
    public _imgPath: ImagePathService,
    private router: Router,
    private _navigate: NavigateService,
    private route: ActivatedRoute,
    private sharedService: SharedService
  ) {}

  ngOnInit(): void {
    if (this.route.snapshot['routeConfig']?.path?.includes('newproducts')) {
      localStorage.setItem('title', 'Portfolio');
      this.sharedService.changeTitle(true);
    }
    this.getCategories();
    this.getProducts();
    this.getBannerByCategory();
  }

  imgCollection: Array<object> = [
    {
      // image: 'assets/port/gloves.png',
      thumbImage: 'assets/port/gloves.png',
      alt: 'GLOVES',
      title: 'GLOVES',
      route: '/contact',
    },
    {
      thumbImage: 'assets/port/facemask.png',
      alt: 'FACE MASK',
      title: 'FACE MASK',
    },
    {
      thumbImage: 'assets/port/eyeProtection.png',
      alt: 'EYE PROTECTION',
      title: 'EYE PROTECTION',
    },
    {
      thumbImage: 'assets/port/protectiveCovers.png',
      alt: 'PROTECTIVE COVERS',
      title: 'PROTECTIVE COVERS',
    },

    {
      thumbImage: 'assets/port/covid19.png',
      alt: 'COVID 19 AND ICU MACHINES',
      title: 'COVID 19 AND ICU MACHINES',
    },
  ];
  popularCollection: Array<object> = [
    {
      // image: 'assets/port/gloves.png',
      thumbImage: 'assets/img/GL-60 POD Chemo Nitrile Gloves, 6,5 100 pcs.png',
      alt: 'GL-60 POD Chemo Nitrile Gloves',
      title: 'GL-60 POD Chemo Nitrile Gloves',
      // route:'/contact'
    },
    {
      thumbImage: 'assets/img/Gloves_aloe.png',
      alt: 'Gloves_aloe',
      title: 'Gloves_aloe',
    },
    {
      thumbImage:
        'assets/img/POD Disposable Examination Nitrile Gloves, Black,100 _pcs.png',
      alt: 'POD Disposable Examination Nitrile Gloves',
      title: 'POD Disposable Examination Nitrile Gloves',
    },
    {
      thumbImage:
        'assets/img/POD Disposable Premium Examination Vinyl Gloves, 100 pcs.png',
      alt: 'POD Disposable Premium Examination Vinyl Gloves',
      title: 'POD Disposable Premium Examination Vinyl Gloves',
    },
  ];

  getProducts() {
    this._podService.getAllPopularProducts().subscribe((res) => {
      this.products = res.PopularProductList.content;
      console.log('proooos', this.products);

      this.products = this.products.map((ele: any) => {
        return {
          thumbImage: this._imgPath.imgPath + ele.imageLink,
          title: ele.subCategoryname,
          alt: ele.subCategoryname,
          id: ele.productId,
        };
      });
      console.log(this.products);
    });
  }

  getCategories() {
    this._podService.getProducts().subscribe((res) => {
      this.catalist = res.CatList;
      this.categories = this.catalist;
      console.log(this.categories);

      this.categories = this.categories.map((ele: any) => {
        return {
          thumbImage: this._imgPath.imgPath + ele.imageLink,
          title: ele.categoryName,
          alt: ele.categoryName,
          id: ele.categoryId,
        };
      });

      // this.name = filter(() => res.CatList.content.categoryName);
      // console.log(this.name);
    });
  }

  goToContact() {
    this.router.navigate(['/contact']);
  }
  // goToSubCatList(id: any, name: any) {
  //   // console.log("d",product);
  //   // console.log("d",name);
  //   localStorage.setItem('catName', name);

  //   console.log('d', id);

  //   this._navigate.updateProductPath(id);
  //   this.router.navigate(['productsList', id]);
  // }

  
  goToSubCatList(id: any, name: any, subCatName: any, catId: any) {
    // console.log("d",product);
    // console.log("d",name);
    localStorage.setItem('catName', name);
    localStorage.setItem('catId', catId);
    this.sharedService.changeSubCategory({ subCatname: subCatName });

    console.log('d', id);

    this._navigate.updateProductPath(id);
  this.router.navigate(['productsList', id]);
}

  goToDetails(id: any, name: any) {
    this._navigate.updatePath({ id: id, name: name });
    this.router.navigate(['productsList', id, name]);
  }

  getSubcategories(event: any) {
    // console.log(event);
    
    this.categories.forEach((res: any, i: any) => {
      console.log(res);
      
      if (i === event) {
        // console.log(event,i,res.title);
        localStorage.setItem('catName', res.title);
        localStorage.setItem("catId",res.id);
        this._navigate.updatePath({ id: res.id, name: res.title });
        this.router.navigate(['productsList', res.id, res.title]);
      }
    });
  }

  getProductDetails(event: any) {
    console.log(event);
    this.products.forEach((res: any, i: any) => {
      if (i === event) {
        this.router.navigate(['/productsDetails', res.id]);
      }
    });
    
  }
  getBannerByCategory() {
    this._podService.getAllBannerImagesByCat('8').subscribe((res) => {
      this.bannerImgs = res.content.BannerImagesListByCategoryID;
    });
  }

}
