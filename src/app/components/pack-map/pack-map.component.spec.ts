import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackMapComponent } from './pack-map.component';

describe('PackMapComponent', () => {
  let component: PackMapComponent;
  let fixture: ComponentFixture<PackMapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PackMapComponent]
    });
    fixture = TestBed.createComponent(PackMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
