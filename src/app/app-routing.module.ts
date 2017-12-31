import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { HomeComponent } from './new/new.component';
import { PresetsComponent } from './presets/presets.component';
import { PresetComponent } from './preset/preset.component';
import { PresetNewComponent } from './preset-new/preset-new.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'presets',
    component: PresetsComponent
  },
  {
    path: 'presetNew',
    component: PresetNewComponent
  },
  {
    path: 'preset/:id',
    component: PresetComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
