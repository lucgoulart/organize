import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizarMinhasContasComponent } from './organizar-minhas-contas.component';

describe('OrganizarMinhasContasComponent', () => {
  let component: OrganizarMinhasContasComponent;
  let fixture: ComponentFixture<OrganizarMinhasContasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrganizarMinhasContasComponent]
    });
    fixture = TestBed.createComponent(OrganizarMinhasContasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
