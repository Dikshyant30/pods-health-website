import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PodHealthService } from 'src/app/services/pod-health.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.scss']
})
export class FAQsComponent implements OnInit {

  panelOpenState = false;
  faqList:any = [];


  constructor(
    private router: Router,
    private route:ActivatedRoute,
    private sharedService: SharedService,
    private _pdService: PodHealthService) { }

  ngOnInit(): void {
    this.getFaqs();
    if (this.route.snapshot['routeConfig']?.path?.includes('help')) {
      localStorage.setItem('title', 'FAQs');
      this.sharedService.changeTitle(true);

    }
  }

  goToContact() {
    this.router.navigate(['/contact']);
  }

  
  getFaqs() {
    this._pdService.getAllFaqs().subscribe((data) => {
      this.faqList = data.faqList;
    });
  }

}
