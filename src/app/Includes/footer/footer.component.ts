import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigateService } from 'src/app/services/navigate.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(
    private router: Router,private sharedService:SharedService,
    private _navigate: NavigateService
    ) { }

  ngOnInit(): void {
  }

  goToAbout() {
    localStorage.setItem('title','About Us');
    this.sharedService.changeTitle(true);
    this.router.navigate(['/about']);
  }
  goToConsultation() {
    localStorage.setItem('title','Consult Services');
    this.sharedService.changeTitle(true);
    this.router.navigate(['/consultationRegistration']);
  }
  goToFAQ(){
    localStorage.setItem('title','FAQs');
    this.sharedService.changeTitle(true);
  }
  goToTeam() {
    localStorage.setItem('title','Our Team');
    this.sharedService.changeTitle(true);
    this.router.navigate(['/team']);
  }
  goToCareer() {
    localStorage.setItem('title','Careers');
    this.sharedService.changeTitle(true);
    this.router.navigate(['/career']);
  }
  goToCatalog() {
    localStorage.setItem('title','Catalogs');
    this.sharedService.changeTitle(true);
    this.router.navigate(['/catalogs']);
  }

  // goToDetails() {
  //   this.router.navigate(['productsList', '2c9fa9317cbc1969017cbc487c230003','Gloves']);
  // }

  goToDetails(id: any, name: any) {
    // this._navigate.updatePath(id,name);\
    this._navigate.updatePath({id:id,name:name}); 
    localStorage.setItem("catId",id);
    localStorage.setItem("catName",name);
    this.router.navigate(['productsList', id,name]);
    this.sharedService.changeCategory(true);
  }
  

}
