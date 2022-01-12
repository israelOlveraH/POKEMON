import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemondetaileComponent } from './pokemondetaile.component';

describe('PokemondetaileComponent', () => {
  let component: PokemondetaileComponent;
  let fixture: ComponentFixture<PokemondetaileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemondetaileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemondetaileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
