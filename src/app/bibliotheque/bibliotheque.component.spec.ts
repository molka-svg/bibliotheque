import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BibliothequeComponent } from './bibliotheque.component';

describe('BibliothequeComponent', () => {
  let component: BibliothequeComponent;
  let fixture: ComponentFixture<BibliothequeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BibliothequeComponent]
    });
    fixture = TestBed.createComponent(BibliothequeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
