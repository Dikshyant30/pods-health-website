import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ImagePathService {

  public apiImgUrl: any = `${environment.apiBaseUrl}`;

   imgPath!: string;

   constructor() { 
      this.apiImgUrl = this.apiImgUrl.split("PodHealth");
      let imgUrl = this.apiImgUrl[0];
      console.log(imgUrl);
      this.imgPath = imgUrl+'images/';
  }
   getFilePath(imgName: string) {
     return this.imgPath + imgName;
   }
}
