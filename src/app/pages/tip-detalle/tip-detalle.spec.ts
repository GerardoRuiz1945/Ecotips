import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipDetalle } from './tip-detalle';

describe('TipDetalle', () => {
  let component: TipDetalle;
  let fixture: ComponentFixture<TipDetalle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TipDetalle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipDetalle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
