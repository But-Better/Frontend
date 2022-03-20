import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlcoholFormComponent } from './alcohol-form.component';

describe('AlcoholFormComponent', () => {
  let component: AlcoholFormComponent;
  let fixture: ComponentFixture<AlcoholFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlcoholFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlcoholFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
