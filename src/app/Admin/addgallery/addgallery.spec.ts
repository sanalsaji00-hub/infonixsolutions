import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Addgallery } from './addgallery';

describe('Addgallery', () => {
  let component: Addgallery;
  let fixture: ComponentFixture<Addgallery>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Addgallery]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Addgallery);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
