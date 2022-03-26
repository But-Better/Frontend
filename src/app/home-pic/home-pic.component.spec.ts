import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePicComponent } from './home-pic.component';

describe('HomePicComponent', () => {
  let component: HomePicComponent;
  let fixture: ComponentFixture<HomePicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
