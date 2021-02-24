import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlatsViewComponent } from './flats-view.component';

describe('FlatsViewComponent', () => {
  let component: FlatsViewComponent;
  let fixture: ComponentFixture<FlatsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlatsViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlatsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
