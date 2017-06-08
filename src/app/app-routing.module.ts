import {NgModule}      from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent}  from './dashboard/dashboard.component';
import {StudentComponent}  from './student/student.component';
import {StudentDetailComponent} from './student/student-detail.component';
import {LocalizeRouterModule} from 'localize-router';

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
        LocalizeRouterModule.forRoot(routes),
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {
}
