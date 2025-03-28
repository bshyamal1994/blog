import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTopmenuComponent } from './admin-topmenu.component';

describe('AdminTopmenuComponent', () => {
  let component: AdminTopmenuComponent;
  let fixture: ComponentFixture<AdminTopmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminTopmenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminTopmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
