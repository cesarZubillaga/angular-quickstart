import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'my-students',
    templateUrl: './student.component.html'
})

export class StudentComponent implements OnInit {
    title = 'Students';
    ngOnInit(): void {
        console.log('ngOnInit StudentsComponent');
    }
}