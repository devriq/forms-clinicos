import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroAdmComponent } from './cadastro-adm.component';

describe('CadastroComponent', () => {
  let component: CadastroAdmComponent;
  let fixture: ComponentFixture<CadastroAdmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroAdmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
