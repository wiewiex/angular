import { Component, EventEmitter, Output } from '@angular/core';

export type Feature = 'shopping-list' | 'recipe';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  @Output() featureSelected = new EventEmitter<Feature>();

  onSelect(feature: Feature) {
    this.featureSelected.emit(feature);
  }
}
