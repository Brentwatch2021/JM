import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserServiceService } from 'src/services/user-service.service';
import { JM_User } from 'src/services/JM_User';
import { Location } from '@angular/common';

@Component({
  selector: 'app-jm-user-form',
  templateUrl: './jm-user-form.component.html',
  styleUrls: ['./jm-user-form.component.css']
})
export class JmUserFormComponent {

  @Output() handleCancel = new EventEmitter();

  @Output() handleSave = new EventEmitter();

  userService!:UserServiceService;

  _locationService!:Location;

  user:JM_User = new JM_User();

  @Input() userToEdit:any;

  @Input() isUserShow!:boolean;

  constructor(private userServiceService:UserServiceService, private locationService:Location) {
    this.userService = userServiceService;
    this._locationService = locationService;
  }

  // These are the form input events
  handleNameChange(e:any)
  {
    const nameSelected = e?.target?.value;
    if(!this.userToEdit)
    {
      this.user.name = nameSelected;
    }
    else if(nameSelected)
    {
      this.userToEdit.name = nameSelected;
    }
  }

  handleLastNameChange(e:any)
  {
    const lastNameSelected = e?.target?.value;
    if(!this.userToEdit)
    {
      this.user.lastName = lastNameSelected;
    }
    else if(lastNameSelected)
    {
      this.userToEdit.lastName = lastNameSelected;
    }
  }

  handleEmailChange(e:any)
  {
    const emailSelected = e?.target?.value;
    if(!this.userToEdit && emailSelected)
    {
      this.user.Email = emailSelected;
    }
    else if(emailSelected)
    {
      this.userToEdit.Email = emailSelected;
    }
  }

  handleFileInput(e: any)
  {
    const selectedProfilePhoto = e?.target?.files[0]; 
    if(!this.userToEdit && selectedProfilePhoto) 
    {
      this.user.ProfilePhoto = selectedProfilePhoto;
    }
    else if(selectedProfilePhoto)
    {
      this.userToEdit.ProfilePhoto = selectedProfilePhoto;
    }
  }

  handleUserSave(event:any)
  {
    //event.preventDefault();
    // execute concrete implmentation
    //alert("Name: " + this.user.Name + " Last Name" + this.user.LastName + "Email: " + this.user.Email); 
    if(this.user && !this.userToEdit)
    {
      // Causing the ford data to return to the URL page
      //  this.userService.SaveUser(this.user).subscribe(
      //   {
      //     next:(jmUser:any) => {
      //       alert(`User ${jmUser.name} ${jmUser.lastName} was successfully created`);
      //       // Start the finish process 
      //       //this.handleSave.emit();
      //     },
      //     error:(e:any) => {
      //       // Logger service
      //       alert(e);
      //     }
          
      //   }
      // );

      this.userService.SaveUser(this.user);

      this.user = new JM_User();


      // handle the cancel form event
      this.handleSave.emit();
    }

    if(this.userToEdit)
    {
      this.userService.EditUser(this.user,this.userToEdit);
    }
    
    // Moving this into the next or the error states inside the observables above
    // execute parent Cancel Implementation
    //this.handleSave.emit();
  }

  handleUserCancel()
  {
    // execute concrete implmentation
    this.user = new JM_User();
    // execute parent Cancel Implementation
    this.handleCancel.emit();
  }

  handleUserDelete()
  {
    if(confirm(`Are you sure you would like to Delete User: ${this.userToEdit.name} ${this.userToEdit.lastName}`))
    {
      if(this.userToEdit)
      {
        this.userService.DeleteUser(this.userToEdit.id).subscribe(
          {
            next: (jmuser:any) => {
              alert(`User ${jmuser.name} ${jmuser.lastName} was deleted successfully`);
              // location service to navigate back
              this._locationService.back();
            },
            error: (e:any) => 
            {
              alert(`Unable to delete user: ${this.userToEdit.name} ${this.userToEdit.lastName}`);
              // Logger service log errors
            }
          }
        );
      }
    }
    

    // Yes wait for reponse from server after that return to main users list

    //alert("im gna delete when flow is right");
    // if(this.itemToEdit)
    // {
    //   this.userService.DeleteUser(this.itemToEdit.id);
    // }
  }


}
