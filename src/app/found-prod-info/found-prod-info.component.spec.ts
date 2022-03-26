import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoundProdInfoComponent } from './found-prod-info.component';

describe('FoundProdInfoComponent', () => {
  let component: FoundProdInfoComponent;
  let fixture: ComponentFixture<FoundProdInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FoundProdInfoComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoundProdInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
