import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InsertarPage } from './insertar.page';

describe('InsertarPage', () => {
  let component: InsertarPage;
  let fixture: ComponentFixture<InsertarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InsertarPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InsertarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
