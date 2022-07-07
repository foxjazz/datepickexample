import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatePickerSampleComponent } from './date-picker-sample.component';

describe('DatePickerSampleComponent', () => {
  let component: DatePickerSampleComponent;
  let fixture: ComponentFixture<DatePickerSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatePickerSampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatePickerSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
