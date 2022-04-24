import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { from } from 'rxjs';
import { filter, toArray } from 'rxjs/operators';
import { ImagePathService } from 'src/app/services/image-path.service';
import { NavigateService } from 'src/app/services/navigate.service';
import { PodHealthService } from 'src/app/services/pod-health.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  categories: any = [];
  catalist: any = [];
  name: any = [];

  constructor(
    private _podService: PodHealthService, 
    private router: Router,
    public _imgPath: ImagePathService,
    private _navigate: NavigateService,
    private route:ActivatedRoute,
    private sharedService:SharedService) {}

  ngOnInit(): void {
    if (this.route.snapshot['routeConfig']?.path?.includes('products')) {
      localStorage.setItem('title', 'Products');
      this.sharedService.changeTitle(true);

    }
    window.scroll(10,10);
    this.getCategories();
  }

  getCategories() {
    this._podService.getProducts().subscribe((res) => {

      this.catalist = res.CatList;
      this.categories = this.catalist;
      let source = from(this.categories);

      source.pipe(filter((data:any) => data.categoryStatus==='ACTIVE'), toArray()).subscribe(ele => {
        this.categories = ele;
      });
    });
  }

  // pipe(filter(members => members.name.length  > 6), toArray())
  goToDetails(id: any, name: any) {
    // this._navigate.updatePath(id,name);
    this._navigate.updatePath({id:id,name:name}); 
    localStorage.setItem("catId",id);
    localStorage.setItem("catName",name);


    this.router.navigate(['productsList', id,name]);
  }
}
