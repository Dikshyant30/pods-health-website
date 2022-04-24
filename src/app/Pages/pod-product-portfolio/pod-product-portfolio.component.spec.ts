import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PodProductPortfolioComponent } from './pod-product-portfolio.component';

describe('PodProductPortfolioComponent', () => {
  let component: PodProductPortfolioComponent;
  let fixture: ComponentFixture<PodProductPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PodProductPortfolioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PodProductPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
