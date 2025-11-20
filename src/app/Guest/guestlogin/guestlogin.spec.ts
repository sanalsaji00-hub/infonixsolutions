import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Guestlogin } from './guestlogin';

describe('Guestlogin', () => {
  let component: Guestlogin;
  let fixture: ComponentFixture<Guestlogin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Guestlogin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Guestlogin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
