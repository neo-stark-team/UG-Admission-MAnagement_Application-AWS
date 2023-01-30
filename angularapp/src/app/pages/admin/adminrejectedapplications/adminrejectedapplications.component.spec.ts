import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminrejectedapplicationsComponent } from './adminrejectedapplications.component';

describe('AdminrejectedapplicationsComponent', () => {
  let component: AdminrejectedapplicationsComponent;
  let fixture: ComponentFixture<AdminrejectedapplicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminrejectedapplicationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminrejectedapplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
