import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { from } from 'rxjs';
import { filter, toArray } from 'rxjs/operators';
import { ImagePathService } from 'src/app/services/image-path.service';
import { PodHealthService } from 'src/app/services/pod-health.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {
  bannerImg!:string;
  blogs: any = [];
  title!:string;
  allBlogs: any = []
  
  constructor(private _podService: PodHealthService,
    private router: Router,public _imgPath: ImagePathService,
    private route:ActivatedRoute,private sharedService: SharedService) { }

  ngOnInit(): void {
    this.getBannerByCategory();
    if (this.route.snapshot['routeConfig']?.path?.includes('blogs')) {
      localStorage.setItem('title', 'Blogs');
      this.sharedService.changeTitle(true);
    }
    this.getAllBlog();
  }

  getAllBlog() {
    this._podService.getBlogs().subscribe(res => {
      this.allBlogs = res.blogList;
      // this.blogs = this.allBlogs;
      let source = from(this.allBlogs);

      source.pipe(filter((data:any) => data.blogsStatus==='ACTIVE'), toArray()).subscribe(ele => {
              this.blogs = ele;
      });
    });
  }

  goToBlogDetails(id:any) {
    this.router.navigate(['/blogDetails', id]);
  }
  getBannerByCategory() {
    this._podService
      .getAllBannerImagesByCat('5')
      .subscribe((res) => {
        this.bannerImg = res.content.BannerImagesListByCategoryID[0].bannerImageUrl;
        this.title = res.content.BannerImagesListByCategoryID[0].bannerTitle;        
      });
  }

}
