import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  collapsed = true;
  @Output() featureSelected=new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
  onSelected(feature:string)
  {
    this.featureSelected.emit(feature);
  }

}
