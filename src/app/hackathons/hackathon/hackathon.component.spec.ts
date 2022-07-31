import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { HackathonComponent } from './hackathon.component';

describe('HackathonComponent', () => {
  let component: HackathonComponent;
  let fixture: ComponentFixture<HackathonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, HttpClientModule, RouterTestingModule],
      declarations: [ HackathonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HackathonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
