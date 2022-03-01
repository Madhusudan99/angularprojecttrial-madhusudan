import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveAddressFormComponent } from './reactive-address-form.component';

describe('ReactiveAddressFormComponent', () => {
  let component: ReactiveAddressFormComponent;
  let fixture: ComponentFixture<ReactiveAddressFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveAddressFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveAddressFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
