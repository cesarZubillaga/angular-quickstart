import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <div class="row">
            <h1>{{'APLICATION_NAME' | translate}}</h1>
            <a [routerLink]="['/students']| localize"  routerLinkActive="active">{{ 'STUDENTS' | translate: param }}</a>
            <a [routerLink]="['/dashboard']| localize"  routerLinkActive="active">{{ 'DASHBOARD' | translate: param }}</a>
            <router-outlet></router-outlet>
        </div>
    `,
    styleUrls: ['./app.component.css']
})

export class AppComponent {
}
