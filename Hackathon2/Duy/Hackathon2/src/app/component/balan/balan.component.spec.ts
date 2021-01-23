import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalanComponent } from './balan.component';

describe('BalanComponent', () => {
  let component: BalanComponent;
  let fixture: ComponentFixture<BalanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BalanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BalanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
