import { Component, EventEmitter, Output } from '@angular/core';
import { UserServiceService } from 'src/services/user-service.service';
import { JM_User } from 'src/services/User';

@Component({
  selector: 'app-jm-user-form',
  templateUrl: './jm-user-form.component.html',
  styleUrls: ['./jm-user-form.component.css']
})
export class JmUserFormComponent {

  @Output() handleCancel = new EventEmitter();

  @Output() handleSave = new EventEmitter();

  userService!:UserServiceService;

  user:JM_User = new JM_User();

  constructor(private userServiceService:UserServiceService) {
    this.userService = userServiceService;
  }

  

  // These are the form input events
  handleNameChange(e:any)
  {
    this.user.Name = e?.target?.value;
  }

  handleLastNameChange(e:any)
  {
    this.user.LastName = e?.target?.value;
  }

  handleEmailChange(e:any)
  {
    this.user.Email = e.target.value;
  }

  handleFileInput(e: any)
  {
    this.user.ProfilePhoto = e?.target?.files[0]; 
  }

  handleUserSave()
  {
    // execute concrete implmentation
    //alert("Name: " + this.user.Name + " Last Name" + this.user.LastName + "Email: " + this.user.Email); 
    if(this.user)
    {
      this.userService.SaveUser(this.user);
    }
    
    // execute parent Cancel Implementation
    this.handleSave.emit();
  }

  handleUserCancel()
  {
    // execute concrete implmentation

    // execute parent Cancel Implementation
    this.handleCancel.emit();
  }


}
