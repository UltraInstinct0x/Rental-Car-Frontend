import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddbrandComponent } from './addbrand.component';

describe('AddbrandComponent', () => {
  let component: AddbrandComponent;
  let fixture: ComponentFixture<AddbrandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddbrandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddbrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
