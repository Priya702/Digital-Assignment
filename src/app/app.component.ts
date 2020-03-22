import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Digital-Assignment';
  userId: number;

  processUser(id: number): void {
    this.userId = id;
  }
}
