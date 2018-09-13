import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DroptitleComponent } from './droptitle.component';

describe('DroptitleComponent', () => {
  let component: DroptitleComponent;
  let fixture: ComponentFixture<DroptitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DroptitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DroptitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
