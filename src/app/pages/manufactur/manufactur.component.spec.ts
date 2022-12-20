import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufacturComponent } from './manufactur.component';

describe('ManufacturComponent', () => {
  let component: ManufacturComponent;
  let fixture: ComponentFixture<ManufacturComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManufacturComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManufacturComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
