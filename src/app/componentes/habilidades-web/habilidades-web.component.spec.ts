import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabilidadesWebComponent } from './habilidades-web.component';

describe('HabilidadesWebComponent', () => {
  let component: HabilidadesWebComponent;
  let fixture: ComponentFixture<HabilidadesWebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabilidadesWebComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HabilidadesWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
