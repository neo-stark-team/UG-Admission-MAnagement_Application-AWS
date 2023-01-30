import { ComponentFixture, TestBed } from '@angular/core/testing'; 

import { CheckingadmissionComponent } from './checkingadmission.component'; 

describe('CheckingadmissionComponent', () => { 
  let component: CheckingadmissionComponent; 
  let fixture: ComponentFixture<CheckingadmissionComponent>; 

  beforeEach(async () => { 
    await TestBed.configureTestingModule({ 
      declarations: [ CheckingadmissionComponent ] 
    }) 
    .compileComponents(); 
  }); 

  beforeEach(() => { 
    fixture = TestBed.createComponent(CheckingadmissionComponent); 
    component = fixture.componentInstance; 
    fixture.detectChanges(); 
  }); 

  it('should create', () => { 
    expect(component).toBeTruthy(); 
  }); 
}); 
