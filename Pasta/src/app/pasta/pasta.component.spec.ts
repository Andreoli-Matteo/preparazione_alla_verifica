import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastaComponent } from './pasta.component';

describe('PastaComponent', () => {
  let component: PastaComponent;
  let fixture: ComponentFixture<PastaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PastaComponent]
    });
    fixture = TestBed.createComponent(PastaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
