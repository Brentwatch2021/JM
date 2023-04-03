import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JM_User } from 'src/services/JM_User';
import { UserServiceService } from 'src/services/user-service.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {


  jmUserDetails!:any;

  jmUserId!:Number;

  constructor(private userService:UserServiceService,private router:Router,private _location:Location) {  }


  ngOnInit(): void {

    // Very bad practise to get the the router id from the route like this
    this.userService.GetJM_User(Number(this.router.url.replace('/users/','')))
      .subscribe(
        {
          next: (jmuser:any) => {
            // I cant somehow cast to the type JM_User
            // tried converting to object from api response
            // also tried parsing to JSON and then back to 
            // JMUser object
            // and still unable to access same name properties 
            // in returned object will be using the any type which is 
            // not good practise working in TypeScript but gotta move the 
            // fuck on thanks so much enjoy your day now Druk on 
            //const jsonobject = JSON.stringify(jmusersss);
            //this.jmUser = <JM_User>JSON.parse(jsonobject);
            this.jmUserDetails = jmuser;
            //alert("The user name is: " + this.jmUser.name);
            //console.log(jmusersss);
          },
          error:(e:any) => {
            alert(e);
          } 
        }
      );
    
  }

  GoBack()
  {
    this._location.back();
  }

  


}
