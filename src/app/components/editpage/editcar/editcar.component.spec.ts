import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcarComponent } from './editcar.component';

describe('EditcarComponent', () => {
  let component: EditcarComponent;
  let fixture: ComponentFixture<EditcarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditcarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditcarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
