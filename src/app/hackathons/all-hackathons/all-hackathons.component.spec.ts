import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllHackathonsComponent } from './all-hackathons.component';

describe('AllHackathonsComponent', () => {
  let component: AllHackathonsComponent;
  let fixture: ComponentFixture<AllHackathonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllHackathonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllHackathonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
