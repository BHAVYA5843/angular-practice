import { Component ,OnInit,EventEmitter,Output} from '@angular/core';
//import { ServiceService } from '../service.service';
import { User } from '../user'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit{

  gender=['male','female','not prefered to mention '];

constructor(){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
    }
    
    usermodel=new User('bhavya','challa','bhavya@gmail.com',34,'','j','h','dk',78);
   // @Output() public childEvent =new EventEmitter();
   onsubmit() {
      console.log(this.usermodel);
      //throw new Error('Method not implemented.');
      /*this._service.enroll(this.usermodel).subscribe(
        data=>console.log('Success!',data),
        error=>console.log('error',error)*/
       // this.childEvent.emit(this.usermodel);
        


      
      }
}