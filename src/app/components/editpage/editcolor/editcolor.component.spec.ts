import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcolorComponent } from './editcolor.component';

describe('EditcolorComponent', () => {
  let component: EditcolorComponent;
  let fixture: ComponentFixture<EditcolorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditcolorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditcolorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
