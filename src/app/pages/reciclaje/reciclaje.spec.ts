import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reciclaje } from './reciclaje';

describe('Reciclaje', () => {
  let component: Reciclaje;
  let fixture: ComponentFixture<Reciclaje>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Reciclaje]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Reciclaje);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
