import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { DataService } from '../data.service';

@Component({
  selector: 'app-preset-new',
  templateUrl: './preset-new.component.html',
  styleUrls: ['./preset-new.component.css']
})
export class PresetNewComponent implements OnInit {

  presetName: string = '';
  presets = [];
  constructor(private router: Router, private _data: DataService ) {
  }

  ngOnInit() {
    this._data.preset.subscribe(res => this.presets = res);
  }

  redirect() {
    this.router.navigate(['presets/']);
  }

  addPreset() {

    this.presets.push(this.presetName);
    this.presetName = '';
    this._data.changePreset(this.presets);

    this.redirect()

  }

  selectSample() {
    console.log("select sample")
  }

}
