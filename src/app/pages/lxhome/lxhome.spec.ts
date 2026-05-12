import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lxhome } from './lxhome';

describe('Lxhome', () => {
  let component: Lxhome;
  let fixture: ComponentFixture<Lxhome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lxhome],
    }).compileComponents();

    fixture = TestBed.createComponent(Lxhome);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
