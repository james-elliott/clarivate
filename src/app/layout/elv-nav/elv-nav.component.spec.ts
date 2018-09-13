import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElvNavComponent } from './elv-nav.component';

describe('ElvNavComponent', () => {
  let component: ElvNavComponent;
  let fixture: ComponentFixture<ElvNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElvNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElvNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
