import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NIPComponent } from './nip.component';

describe('NIPComponent', () => {
  let component: NIPComponent;
  let fixture: ComponentFixture<NIPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NIPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NIPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
