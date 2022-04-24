import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ImagePathService } from 'src/app/services/image-path.service';
import { PodHealthService } from 'src/app/services/pod-health.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  productId!: string;
  details!: any;
  @ViewChild('dataContainer',{static:true}) dataContainer!: ElementRef;

  constructor(private route: ActivatedRoute, private _podService: PodHealthService,public _imgPath: ImagePathService, private router: Router) {
    this.productId = this.route.snapshot.params.id;
  }

  ngOnInit(): void {
    this.getDetails(this.productId);
  }


  getDetails(id: string) {
    this._podService.getProductDetails(id).subscribe(res => {
      this.details = res.detail;
      this.details.description =  this.details.description.replace(/&gt;/g, '>');
        this.details.description =  this.details.description.replace(/&lt;/g, '<');
        this.details.description  =  this.loadData(this.details.description);

    })
  }

  goToContact() {
    this.router.navigate(['/contact']);
  }

  loadData(data:any) {
    return this.dataContainer.nativeElement.innerHTML = data;   
  }
  
}
