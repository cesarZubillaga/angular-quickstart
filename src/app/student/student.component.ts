import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'my-students',
    templateUrl: './student.component.html'
})

export class StudentComponent implements OnInit {
    ngOnInit(): void {
        console.log('ngOnInit StudentsComponent');
    }
}
