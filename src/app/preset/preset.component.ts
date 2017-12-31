import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-preset',
  templateUrl: './preset.component.html',
  styleUrls: ['./preset.component.css']
})
export class PresetComponent implements OnInit {

  id: number = -1;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(res => this.id=res.id);
  }

  ngOnInit() {
  }

  activate() {
    console.log( "activate" );
  }

}
