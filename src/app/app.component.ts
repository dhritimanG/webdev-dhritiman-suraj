import { Component } from '@angular/core';
import {Router} from "@angular/router";


@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
  // template: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'title';

    constructor(private router: Router) { }
    ngOnInit() {
        this.router.navigate(['/landing']);
    }
}

