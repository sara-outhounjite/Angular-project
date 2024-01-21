import { Component } from '@angular/core';
import { Users } from '../Users';
import { RegistrationServiceService } from '../registration-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  msg=''
  user = new Users();
     constructor(private service:RegistrationServiceService,private router:Router){}
     Registeruser(){
       this.service.Registeruserfromremote(this.user).subscribe(
         data => {console.log("response recieved");
         this.msg="Registration successful";
        },
         error => {console.log("exception"),
         this.msg="try again";
      }
         )
       
     }
     Goregister(){
        this.router.navigate(['/registration']);
     }
}
