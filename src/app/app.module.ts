import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PresetsComponent } from './presets/presets.component';
import { PresetComponent } from './preset/preset.component';
import { PresetIndicatorComponent } from './preset-indicator/preset-indicator.component';


@NgModule({
  declarations: [
    AppComponent,
    PresetsComponent,
    PresetComponent,
    PresetIndicatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
