import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutTheFundComponent } from './about-the-fund.component';

describe('AboutTheFundComponent', () => {
  let component: AboutTheFundComponent;
  let fixture: ComponentFixture<AboutTheFundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutTheFundComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutTheFundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
