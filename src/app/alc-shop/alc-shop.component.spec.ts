import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlcShopComponent } from './alc-shop.component';

describe('AlcShopComponent', () => {
  let component: AlcShopComponent;
  let fixture: ComponentFixture<AlcShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlcShopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlcShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
