import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoundAlcComponent } from './found-alc.component';

describe('FoundAlcComponent', () => {
  let component: FoundAlcComponent;
  let fixture: ComponentFixture<FoundAlcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoundAlcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoundAlcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
