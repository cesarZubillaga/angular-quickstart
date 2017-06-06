import {Component, Input, OnInit} from '@angular/core';
import {Student} from './student';
import {StudentService} from './student.service';

@Component({
    selector: 'student-list',
    templateUrl: './student-list.html'
})

export class StudentListComponent implements OnInit {
    @Input() students: Student[];
    constructor(private studentService: StudentService) {
    }
    ngOnInit(): void {
        console.log('ngOnInit AppComponent');
        this.getStudents();
    }
    getStudents(): void {
        this.studentService.getStudents().then(students =>
            this.students = students
        );
    }
}
