import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFlatsComponent } from './form-flats.component';

describe('FormFlatsComponent', () => {
  let component: FormFlatsComponent;
  let fixture: ComponentFixture<FormFlatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormFlatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFlatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
