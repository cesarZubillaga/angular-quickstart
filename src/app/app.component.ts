import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <div class="row">
            <h1>{{title}}</h1>
            <a routerLink="/students"  routerLinkActive="active">Students</a>
            <a routerLink="/dashboard"  routerLinkActive="active">Dashboard</a>
            <router-outlet></router-outlet>
        </div>
    `,
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    title = 'Aplication';
}
