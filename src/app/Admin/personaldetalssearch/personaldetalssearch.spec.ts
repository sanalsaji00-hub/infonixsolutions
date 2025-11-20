import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Personaldetalssearch } from './personaldetalssearch';

describe('Personaldetalssearch', () => {
  let component: Personaldetalssearch;
  let fixture: ComponentFixture<Personaldetalssearch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Personaldetalssearch]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Personaldetalssearch);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
