import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <div class="row">
            <h1>{{title}}</h1>
            <a routerLink="/students">Students</a>
            <a routerLink="/dashboard">Dashboard</a>
            <router-outlet></router-outlet>
        </div>
    `,
})

export class AppComponent {
    title = 'Aplication';
}
