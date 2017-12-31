import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

  private presets = new BehaviorSubject<any>(['Primero', 'Segundo']);
  preset = this.presets.asObservable();

  constructor() { }

  changePreset(preset) {
    this.presets.next(preset)
  }

}
