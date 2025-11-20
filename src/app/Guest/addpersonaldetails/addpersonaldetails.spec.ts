import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Addpersonaldetails } from './addpersonaldetails';

describe('Addpersonaldetails', () => {
  let component: Addpersonaldetails;
  let fixture: ComponentFixture<Addpersonaldetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Addpersonaldetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Addpersonaldetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
