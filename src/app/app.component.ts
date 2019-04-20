import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'my-app';

  constructor(private router: Router) {
  
  }

  goToCharts() {
    this.router.navigate(['charts']);
  }

  goToAmCharts() {
    this.router.navigate(['amCharts']);
  }
}
