import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-app';
  featureSelected:string;
  openSelected(feature:string){
    this.featureSelected=feature;
  }
}
