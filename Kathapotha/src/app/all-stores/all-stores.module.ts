import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllStoresPageRoutingModule } from './all-stores-routing.module';

import { AllStoresPage } from './all-stores.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllStoresPageRoutingModule
  ],
  declarations: [AllStoresPage]
})
export class AllStoresPageModule {}
