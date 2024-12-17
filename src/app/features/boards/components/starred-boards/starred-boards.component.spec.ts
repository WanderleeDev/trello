import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarredBoardsComponent } from './starred-boards.component';

describe('StarredBoardsComponent', () => {
  let component: StarredBoardsComponent;
  let fixture: ComponentFixture<StarredBoardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StarredBoardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StarredBoardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
