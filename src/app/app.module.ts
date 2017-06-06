import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms'; // <-- NgModel lives here
import {DashboardComponent}  from './dashboard/dashboard.component';
import {StudentComponent}  from './student/student.component';
import {StudentDetailComponent} from './student/student-detail.component';
import {StudentListComponent} from './student/student-list.component';
import {StudentService} from './student/student.service';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule
    ],
    providers: [
        StudentService
    ],
    declarations: [
        AppComponent,
        StudentComponent,
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
