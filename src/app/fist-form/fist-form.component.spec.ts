import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FistFormComponent } from './fist-form.component';

describe('FistFormComponent', () => {
  let component: FistFormComponent;
  let fixture: ComponentFixture<FistFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FistFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FistFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
