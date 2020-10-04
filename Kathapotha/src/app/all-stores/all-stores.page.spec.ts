import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AllStoresPage } from './all-stores.page';

describe('AllStoresPage', () => {
  let component: AllStoresPage;
  let fixture: ComponentFixture<AllStoresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllStoresPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AllStoresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
