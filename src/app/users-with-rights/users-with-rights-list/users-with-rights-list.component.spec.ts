import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersWithRightsListComponent } from './users-with-rights-list.component';

describe('UsersWithRightsListComponent', () => {
  let component: UsersWithRightsListComponent;
  let fixture: ComponentFixture<UsersWithRightsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersWithRightsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersWithRightsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
