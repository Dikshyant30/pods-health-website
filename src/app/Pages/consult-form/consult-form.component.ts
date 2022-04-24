import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-consult-form',
  templateUrl: './consult-form.component.html',
  styleUrls: ['./consult-form.component.scss']
})
export class ConsultFormComponent implements OnInit, OnDestroy {

  consultType!: string | null;

  constructor() { }

  ngOnInit(): void {
    this.consultType =  localStorage.getItem('consultFormType');
    console.log(this.consultType);
  }

  ngOnDestroy() {
    localStorage.removeItem('consultFormType');
  }

}
