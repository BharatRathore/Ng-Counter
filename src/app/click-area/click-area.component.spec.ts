import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickAreaComponent } from './click-area.component';

describe('ClickAreaComponent', () => {
  let component: ClickAreaComponent;
  let fixture: ComponentFixture<ClickAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClickAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
