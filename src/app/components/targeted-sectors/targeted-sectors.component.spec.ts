import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetedSectorsComponent } from './targeted-sectors.component';

describe('TargetedSectorsComponent', () => {
  let component: TargetedSectorsComponent;
  let fixture: ComponentFixture<TargetedSectorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TargetedSectorsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TargetedSectorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
