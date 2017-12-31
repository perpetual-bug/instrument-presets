import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresetIndicatorComponent } from './preset-indicator.component';

describe('PresetIndicatorComponent', () => {
  let component: PresetIndicatorComponent;
  let fixture: ComponentFixture<PresetIndicatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresetIndicatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresetIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
