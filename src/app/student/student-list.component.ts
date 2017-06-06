import {Component, Input, OnInit} from '@angular/core';
import {Student} from './student';
import {StudentService} from './student.service';

@Component({
    selector: 'student-list',
    template: `
        <table class="table">
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Score</th>
                <th>Action</th>
            </tr>
            <tr *ngFor="let student of students" class.selected="student === selectedStudent">
                <td>{{student.id}}</td>
                <td>{{student.name }}</td>
                <td>{{student.email }}</td>
                <td>{{student.score}}</td>
                <td>
                    <button class="btn btn-success" (click)="onSelect(student)">View</button>
                </td>
            </tr>
        </table>
    `
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
    onSelect(student: Student): void {
        console.log('onSelect')
        console.log(student)
        this.studentService.setActiveStudent(student);
    }
}
