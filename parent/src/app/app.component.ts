import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'parent';
  data: any = 'something from parent!';
  dataList: string[] = [];

  getDataBack($event: string) {
    this.dataList.push($event);
  }
}
