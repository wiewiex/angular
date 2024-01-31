import { Component } from '@angular/core';
import { Feature } from './header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'angular-course-project';
  loadedFeature: Feature = 'recipe';
  onNavigate(feature: Feature) {
    this.loadedFeature = feature;
  }
}
