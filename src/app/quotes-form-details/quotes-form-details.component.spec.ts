import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotesFormDetailsComponent } from './quotes-form-details.component';

describe('QuotesFormDetailsComponent', () => {
  let component: QuotesFormDetailsComponent;
  let fixture: ComponentFixture<QuotesFormDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuotesFormDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotesFormDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
