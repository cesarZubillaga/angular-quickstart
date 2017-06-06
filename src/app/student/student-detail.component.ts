import {Component, Input, OnInit} from '@angular/core';
import {StudentService} from './student.service';
import {Student} from './student';

@Component({
    selector: 'student-detail',
    template: `
        <div class="col-xs-12">
            <div *ngIf="student">
                <h3>{{student.name}}</h3>
                <div>
                    <p>{{student.id}} {{student.name}} {{student.email}} {{student.score}}</p>
                </div>
            </div>
        </div>
    `
})

export class StudentDetailComponent implements OnInit {
    @Input() student: Student;

    constructor(private studentService: StudentService) {
    }

    ngOnInit(): void {
        console.log('ngOnInit StudentDetailComponent');
        this.student = this.studentService.getActiveStudent();
    }
}
