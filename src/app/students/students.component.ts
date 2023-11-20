import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Student } from '../../model/Student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent {

    students:Student[] = []
    message:string=""
    colorClass:string=""
    constructor(private service:StudentService){//private service is dependency injection.service is variable we can keep anything
       this.students = service.findAllStudents()
    }
  showStudents(){
     
  }
  deleteStudent(rollno:number){
    
    const result = confirm('Want to delete student with roll no: '+rollno)
    if(result){
       this.students=this.students.filter(s => s.rollno != rollno)
       this.message="Record Deleted!!"
       this.colorClass="success"
    }
    else{
       this.message="Deletion Cancelled!!"
       this.colorClass="error"
    }
  }
  updateStudent(s:Student){
    console.log(s)
  }
}
