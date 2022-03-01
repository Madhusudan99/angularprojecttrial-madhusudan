import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpcheckComponent } from './httpcheck.component';

describe('HttpcheckComponent', () => {
  let component: HttpcheckComponent;
  let fixture: ComponentFixture<HttpcheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HttpcheckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpcheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
