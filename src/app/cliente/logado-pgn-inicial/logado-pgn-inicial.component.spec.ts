import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogadoPgnInicialComponent } from './logado-pgn-inicial.component';

describe('LogadoPgnInicialComponent', () => {
  let component: LogadoPgnInicialComponent;
  let fixture: ComponentFixture<LogadoPgnInicialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogadoPgnInicialComponent]
    });
    fixture = TestBed.createComponent(LogadoPgnInicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
