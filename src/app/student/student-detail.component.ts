import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Location} from '@angular/common';
import 'rxjs/add/operator/switchMap';
import {StudentService} from './student.service';
import {Student} from './student';

@Component({
    selector: 'student-detail',
    templateUrl: './student-detail.html',
})

export class StudentDetailComponent implements OnInit {
    @Input() student: Student;

    constructor(
                private studentService: StudentService,
                private route: ActivatedRoute,
                private location: Location
    ) {
    }

    ngOnInit(): void {
        console.log('ngOnInit StudentDetailComponent');
        this.student = this.studentService.getActiveStudent();
        // this switchMap listen the params comming from request, if they change then cancel the current process and calls
        // a new one.
        this.route.params
            .switchMap((params: Params) => this.studentService.getStudent(+params['id']))
            .subscribe( student => this.student = student)
        ;
    }
    goBack(): void {
      this.location.back();
    }

}
