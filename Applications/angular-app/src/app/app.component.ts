import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent {
  title = 'angular-app';

  buttonClick(event: any) {
    console.log('Outer Click', event);
  }

  get onClickHandler() {
    return JSON.stringify(this.buttonClick);
  }
  readonly data = [
    'Fantastic Plastic Shoes',
    'Fantastic Steel Car',
    'Licensed Steel Gloves',
    'Rustic Wooden Hat',
    'Handmade Granite Chicken',
    'Generic Rubber Sausages',
    'Refined Granite Shoes',
    'Rustic Wooden Computer',
    'Licensed Rubber Chair',
    'Refined Granite Car',
  ];
}
