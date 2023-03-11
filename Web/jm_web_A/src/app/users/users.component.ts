import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { JM_User } from 'src/services/User';
import { UserServiceService } from 'src/services/user-service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  // Create array for the users and start building simple ui
  
  jmUsers!:any;

  constructor(private userService:UserServiceService) {}
  
  ngOnInit(): void {
    this.userService.GetJM_Users()
    .subscribe(
      {
        next: (jmusers:any) => 
        {
          console.log(jmusers);
          this.jmUsers = jmusers;
        },
        error:(e:any) => {
          console.log(e);
        }

      }
    );
    //this.userService.GetJM_Users();
  }

}
