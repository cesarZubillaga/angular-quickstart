import {NgModule}      from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent}  from './dashboard/dashboard.component';
import {StudentComponent}  from './student/student.component';
import {StudentDetailComponent} from './student/student-detail.component';
import {LanguageComponent} from './language.component';
// import {TranslateModule} from '@ngx-translate/core';
// import {LocalizeRouterModule, ManualParserLoader, LocalizeParser} from 'localize-router';
// import {TranslateService} from 'ng2-translate';
// import {TranslateService} from  '@ngx-translate/core';

const routes: Routes = [
    {
        path: ':lang',
        component: LanguageComponent,
        children: [
            {
                path: 'students',
                component: StudentComponent
            },
            {
                path: 'students/:id',
                component: StudentDetailComponent
            },
            {
                path: 'dashboard',
                component: DashboardComponent
            }
            // ,
            // {
            //     path: '',
            //     redirectTo: 'dashboard',
            //     pathMatch: 'full'
            // }
        ]
    }
];

@NgModule({
    imports: [
        // LocalizeRouterModule.forRoot(routes, {
        //     provide: LocalizeParser,
        //     useFactory: (translate: any, location: any) =>
        //         new ManualParserLoader(translate, location, ['en', 'de', 'es'], 'YOUR_PREFIX'),
        //     deps: [TranslateService, Location]
        // }),
        RouterModule.forRoot(routes)
    ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {
}
