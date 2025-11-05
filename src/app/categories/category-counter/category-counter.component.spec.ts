import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryCounterComponent } from './category-counter.component';

describe('CategoryCounterComponent', () => {
  let component: CategoryCounterComponent;
  let fixture: ComponentFixture<CategoryCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CategoryCounterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
