import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { retry } from 'rxjs/operators';
import { ImagePathService } from 'src/app/services/image-path.service';
import { PodHealthService } from 'src/app/services/pod-health.service';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss'],
})
export class BlogDetailsComponent implements OnInit {
  id: any;
  blogs: any = [];
  blogDetails: any;
  @ViewChild('dataContainer',{static:true}) dataContainer!: ElementRef;
  descrp: any;


  constructor(
    private route: ActivatedRoute,
    private _podService: PodHealthService,
    private sanitizer: DomSanitizer,
    public _imgPath: ImagePathService
  ) {
    this.id = this.route.snapshot.params.id;
  }

  ngOnInit(): void {
    // this.getAllBlog();
    this.getBlogDetails(this.id);
  }

  getBlogDetails(id:any) {
    this._podService.getBlogDetails(id).subscribe(res => {
      this.blogDetails = res.detail;
      // this.blogDetails.forEach((ele : any)=> { .replace(/_/g, ' ');
        this.blogDetails.blogDescription =  this.blogDetails.blogDescription.replace(/&gt;/g, '>');
        this.blogDetails.blogDescription =  this.blogDetails.blogDescription.replace(/&lt;/g, '<');
        // this.descrp = this.blogDetails.blogDescription;
        this.blogDetails.blogDescription  =  this.loadData(this.blogDetails.blogDescription);
      // });
      console.log(this.blogDetails);
    })
  }

  loadData(data:any) {
     return this.dataContainer.nativeElement.innerHTML = data;
    // console.log("parsed string"+this.dataContainer.nativeElement.innerHTML);
    
 }


  replaceString(str:string) {
    var reStr = str;
    reStr = reStr.replace("&gt;", ">");
    reStr = reStr.replace("&lt;", "<");

    console.log(reStr);
    
    return reStr;
  }

  // getAllBlog() {
  //   this._podService.getBlogs().subscribe((res) => {
  //     this.blogs = res.blogList;
  //     this.blogs.forEach((ele: any) => {
  //       if (this.id === ele.blogsId) {
  //         this.blogDetails = ele;
  //         console.log(this.blogDetails);
          
  //       }
  //     });
  //   });
  // }
}
