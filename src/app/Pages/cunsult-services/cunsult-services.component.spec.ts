import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CunsultServicesComponent } from './cunsult-services.component';

describe('CunsultServicesComponent', () => {
  let component: CunsultServicesComponent;
  let fixture: ComponentFixture<CunsultServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CunsultServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CunsultServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
