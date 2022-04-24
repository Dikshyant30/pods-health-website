import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thanks-page',
  templateUrl: './thanks-page.component.html',
  styleUrls: ['./thanks-page.component.scss']
})
export class ThanksPageComponent implements OnInit {
  count = 5;
redirect = "https://form.jotform.com/91607224171956";
  constructor() { }

  ngOnInit(): void {
  }


  countDown() {
    // var timer = document.getElementById("timer");
    // if (this.count > 0) {
    //   this.count--;
    //   timer.innerHTML = "This page will redirect in " + count + " seconds.";
    //   setTimeout("countDown()", 1000);
    // } else {
    //   window.location.href = redirect;
    // }
  }

}
