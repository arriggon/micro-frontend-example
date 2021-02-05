import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child-wrapper',
  template: `
    <micro-app *axLazyElement="link"
      (emitDataToParent)="dataToParent($event)"
      [dataFromParent]="dataToChild">
    </micro-app>
  `,
  styles: [
  ]
})
export class ChildWrapperComponent {
  link: string = 'http://localhost:3000/main.js';
  @Input() dataToChild: string;
  @Output() dataFromChild = new EventEmitter<string>();
  listOfData: string[] = [];

  dataToParent($event: CustomEvent) {
    this.dataFromChild.emit($event.detail);
  }
}
