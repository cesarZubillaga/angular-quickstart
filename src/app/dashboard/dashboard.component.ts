import {Component, OnInit} from '@angular/core';
import {Student} from '../student/student';
import {StudentService} from '../student/student.service';

@Component({
    selector: 'my-dashboard',
    templateUrl: './dashboard.component.html'
})

export class DashboardComponent implements OnInit {
    students: Student[];
    constructor(private studentService: StudentService) {
    }
    ngOnInit(): void {
        this.studentService.getStudents().then(
            students => this.students = students.slice(0, 1)
            );
    }
}
