import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Switchboard';
  switches = [];

  constructor() { }

  ngOnInit() {
    for (let i = 0; i < 10; i++) {
      this.switches[i] = true;
    }
  }

  clickSwitch(idx) {
    this.switches[idx] = !this.switches[idx];
  }
}
