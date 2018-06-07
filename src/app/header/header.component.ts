import { Component, OnInit, EventEmitter, Output } from '@angular/core';
// import {Output} from "@angular/compiler/src/core";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() featureSelected = new EventEmitter<string>();

  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }
  constructor() { }

  ngOnInit() {
  }

}
