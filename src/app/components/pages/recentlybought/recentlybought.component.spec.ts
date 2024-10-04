import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentlyboughtComponent } from './recentlybought.component';

describe('RecentlyboughtComponent', () => {
  let component: RecentlyboughtComponent;
  let fixture: ComponentFixture<RecentlyboughtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecentlyboughtComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentlyboughtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
