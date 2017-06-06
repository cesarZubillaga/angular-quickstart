import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms'; // <-- NgModel lives here
import {RouterModule} from '@angular/router';
import {DashboardComponent}  from './dashboard/dashboard.component';
import {StudentsComponent}  from './student/students.component';
import {StudentDetailComponent} from './student/student-detail.component';
import {StudentListComponent} from './student/student-list.component';
import {StudentService} from './student/student.service';
import {AppComponent} from './app.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot([
            {
                path: 'students',
                component: StudentsComponent
            },
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: '',
                redirectTo: '/dashboard',
                pathMatch: 'full'
            }
        ])
    ],
    providers: [
        StudentService
    ],
    declarations: [
        AppComponent,
        StudentsComponent,
        StudentDetailComponent,
        StudentListComponent,
        DashboardComponent
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule {
}
