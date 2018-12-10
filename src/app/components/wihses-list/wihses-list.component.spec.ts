import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WihsesListComponent } from './wihses-list.component';

describe('WihsesListComponent', () => {
  let component: WihsesListComponent;
  let fixture: ComponentFixture<WihsesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WihsesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WihsesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
