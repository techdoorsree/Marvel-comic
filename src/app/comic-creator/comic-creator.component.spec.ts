import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicCreatorComponent } from './comic-creator.component';

describe('ComicCreatorComponent', () => {
  let component: ComicCreatorComponent;
  let fixture: ComponentFixture<ComicCreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComicCreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComicCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
