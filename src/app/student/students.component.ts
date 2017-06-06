import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'my-students',
    templateUrl: './student.component.html',
})

export class StudentsComponent implements OnInit {
    title = 'Students';
    ngOnInit(): void {
        console.log('ngOnInit StudentsComponent');
    }
}
