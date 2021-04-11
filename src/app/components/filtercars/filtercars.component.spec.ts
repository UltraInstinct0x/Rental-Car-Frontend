import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltercarsComponent } from './filtercars.component';

describe('FiltercarsComponent', () => {
  let component: FiltercarsComponent;
  let fixture: ComponentFixture<FiltercarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltercarsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltercarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
