import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { DataService } from './data.service';

import { PresetsComponent } from './presets/presets.component';
import { PresetComponent } from './preset/preset.component';
import { PresetIndicatorComponent } from './preset-indicator/preset-indicator.component';
import { HomeComponent } from './home/home.component';
import { PresetNewComponent } from './preset-new/preset-new.component';



@NgModule({
  declarations: [
    AppComponent,
    PresetsComponent,
    PresetComponent,
    PresetIndicatorComponent,
    HomeComponent,
    PresetNewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
