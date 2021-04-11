import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcolorComponent } from './addcolor.component';

describe('AddcolorComponent', () => {
  let component: AddcolorComponent;
  let fixture: ComponentFixture<AddcolorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddcolorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcolorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
