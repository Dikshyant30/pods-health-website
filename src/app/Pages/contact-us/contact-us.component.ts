import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  constructor(private route:ActivatedRoute,private sharedService:SharedService) { }

  ngOnInit(): void {
    if (this.route.snapshot['routeConfig']?.path?.includes('contact')) {
      localStorage.setItem('title', 'Contact Us');
      this.sharedService.changeTitle(true);
    }
  }

}
