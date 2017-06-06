import {Injectable} from '@angular/core';
import {Student} from './student';

@Injectable()
export class StudentService {
    student: Student;

    getStudents(): Promise<Student[]> {
        return Promise.resolve([
            {
                id: 1,
                name: 'Manuel Pulido',
                email: 'manuel.pulido@learner.com',
                score: 152,
            },
            {
                id: 2,
                name: 'César Zubillaga',
                email: 'cesar.zubillaga@learner.com',
                score: 134,
            },
        ]);
    }

    getStudent(id: number): Promise<Student> {
        return this.getStudents().then( students => students.find( student => student.id === id ));
    }

    setActiveStudent(student: Student) {
        console.log('StudentService=>setActiveStudent');
        this.student = student;
    }

    getActiveStudent() {
        return this.student;
    }
}
