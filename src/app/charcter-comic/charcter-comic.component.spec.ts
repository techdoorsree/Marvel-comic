import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharcterComicComponent } from './charcter-comic.component';

describe('CharcterComicComponent', () => {
  let component: CharcterComicComponent;
  let fixture: ComponentFixture<CharcterComicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharcterComicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharcterComicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
