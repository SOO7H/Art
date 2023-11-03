import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderFileComponent } from './header-file.component';

describe('HeaderFileComponent', () => {
  let component: HeaderFileComponent;
  let fixture: ComponentFixture<HeaderFileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderFileComponent]
    });
    fixture = TestBed.createComponent(HeaderFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
