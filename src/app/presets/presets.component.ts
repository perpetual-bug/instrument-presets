import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';

import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';



@Component({
  selector: 'app-presets',
  templateUrl: './presets.component.html',
  styleUrls: ['./presets.component.css'],
  animations: [

    trigger('presets', [
      transition('* => *', [

        query(':enter', style({ opacity: 0 }), {optional: true}),

        query(':enter', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
            style({opacity: 1, transform: 'translateY(0)',     offset: 1.0}),
          ]))]), {optional: true})
          ,
          query(':leave', stagger('300ms', [
            animate('.6s ease-out', keyframes([
              style({opacity: 1, transform: 'translateY(0)', offset: 0}),
              style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
              style({opacity: 0, transform: 'translateY(-75%)',     offset: 1.0}),
            ]))]), {optional: true})
          ])
        ])

      ]
    })
    export class PresetsComponent implements OnInit {

      itemCount: number = 4;

      presets = [];

      constructor(private _data: DataService) { }


      ngOnInit() {
        this.itemCount = this.presets.length;
        this._data.preset.subscribe(res => this.presets = res);
        this._data.changePreset(this.presets);
      }



      removePreset(i) {
        this.presets.splice(i, 1);
        this._data.changePreset(this.presets);
      }


    }
