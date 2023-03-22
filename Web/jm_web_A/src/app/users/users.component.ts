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


  // Allow Editiable form to display below the item when the edit button is clicked
  // isItemEdit:boolean = false;


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

  // handleItemEdit()
  // {
  //   //alert("Edit clicked");
  //   this.isItemEdit = true;
  // }

  PageRefresh()
  {
    //alert("We are a go for refresh");
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
  }

}
