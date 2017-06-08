import {NgModule}      from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms'; // <-- NgModel lives here
import {HttpModule, Http} from '@angular/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {DashboardComponent}  from './dashboard/dashboard.component';
import {StudentComponent}  from './student/student.component';
import {StudentDetailComponent} from './student/student-detail.component';
import {StudentListComponent} from './student/student-list.component';
import {StudentService} from './student/student.service';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {LocalizeRouterModule} from 'localize-router';
import {LanguageComponent} from './language.component';

export function HttpLoaderFactory(http: Http) {
    return new TranslateHttpLoader(http);
}
const routes: Routes = [
    {
        path: 'students',
        component: StudentComponent,
        children: [
            {
                path: ':id',
                component: StudentDetailComponent
            },
        ]
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    }
];


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [Http]
            }
        }),
        LocalizeRouterModule.forRoot(routes),
        RouterModule.forRoot(routes)
    ],
    providers: [
        StudentService
    ],
    declarations: [
        AppComponent,
        StudentComponent,
        StudentDetailComponent,
        StudentListComponent,
        LanguageComponent,
        DashboardComponent
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule {
}
