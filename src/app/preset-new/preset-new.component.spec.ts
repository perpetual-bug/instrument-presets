import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresetNewComponent } from './preset-new.component';

describe('PresetNewComponent', () => {
  let component: PresetNewComponent;
  let fixture: ComponentFixture<PresetNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresetNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresetNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
