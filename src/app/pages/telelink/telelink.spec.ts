import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Telelink } from './telelink';

describe('Telelink', () => {
  let component: Telelink;
  let fixture: ComponentFixture<Telelink>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Telelink],
    }).compileComponents();

    fixture = TestBed.createComponent(Telelink);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
