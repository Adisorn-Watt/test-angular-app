import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-angular-app';
  version: number = 0;
  isProduct: boolean = true;
  account = {
    username: "mookCuteGirl",
    password: "1212312121"
  }
  time1 = 0;

  getResult() {
    return "Earth";
  }

  onClick() {
    this.version++;
  }

  onChange1(event) {
    this.time1 = event;
  }

  onResetVersion() {
    this.version = 0;
  }

}
