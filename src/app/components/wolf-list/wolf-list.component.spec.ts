import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WolfListComponent } from './wolf-list.component';

describe('WolfListComponent', () => {
  let component: WolfListComponent;
  let fixture: ComponentFixture<WolfListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WolfListComponent]
    });
    fixture = TestBed.createComponent(WolfListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
