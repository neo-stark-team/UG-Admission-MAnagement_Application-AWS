import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminapprovedapplicationsComponent } from './adminapprovedapplications.component';

describe('AdminapprovedapplicationsComponent', () => {
  let component: AdminapprovedapplicationsComponent;
  let fixture: ComponentFixture<AdminapprovedapplicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminapprovedapplicationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminapprovedapplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
