import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddrentalComponent } from './addrental.component';

describe('AddrentalComponent', () => {
  let component: AddrentalComponent;
  let fixture: ComponentFixture<AddrentalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddrentalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddrentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
