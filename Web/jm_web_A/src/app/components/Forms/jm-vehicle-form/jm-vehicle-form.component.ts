import { Component, EventEmitter, Input,OnInit,Output } from '@angular/core';
import { JM_Vehicle } from 'src/services/Vehicle/JM_Vehicle';
import { VehiclesAPIService } from 'src/services/Vehicle/vehicles-api.service';
import { Location } from '@angular/common';
import { UserServiceService } from 'src/services/user-service.service';

@Component({
  selector: 'app-jm-vehicle-form',
  templateUrl: './jm-vehicle-form.component.html',
  styleUrls: ['./jm-vehicle-form.component.css']
})
export class JmVehicleFormComponent implements OnInit {

  @Input() isVehicleShow!:boolean;

  @Output() handleCancel = new EventEmitter();

  @Output() handleSave = new EventEmitter();

  vehicle:JM_Vehicle = new JM_Vehicle();

  jmUsers:any;
  
  @Input() vehicleToEdit:any;

  constructor(private vehicleAPI:VehiclesAPIService,private _location:Location, private usersAPI:UserServiceService) {}
  
  ngOnInit(): void {
    this.usersAPI.GetJM_Users()
    .subscribe(
      {
        next:(jmUsers:any) => 
        {
          this.jmUsers = jmUsers;
        },
        error:(e:any) => 
        {
          console.log(e);
        }

      }
    );
  }

  handleVehicleAssignedTo(e:any)
  {
    const selectedUserId = e?.target?.value;
    if(!this.vehicleToEdit && selectedUserId > 0)
    {
      this.vehicle.assignedTo = selectedUserId;
    }
    else if(selectedUserId > 0)
    {
      this.vehicleToEdit.assignedTo = selectedUserId;
    }
  }

  handleVehicleImageUpload(e:any)
  {
    const vehicleImageSelected = e?.target?.files[0];
    if(!this.vehicleToEdit && vehicleImageSelected)
    {
      this.vehicle.vehicle_Photo = vehicleImageSelected;
    }
    else
    {
      this.vehicleToEdit.vehicle_Photo = vehicleImageSelected;
    }
  }

  handleVehicleNameChange(event:any)
  {
    if(!this.vehicleToEdit)
    {
      this.vehicle.name = event?.target?.value;
    }
    else
    {
      this.vehicleToEdit.name = event?.target?.value;
    }
  }

  handleVehicleRegChange(e:any)
  {
    const selectedVehicleReg = e?.target?.value;
    if(!this.vehicleToEdit && selectedVehicleReg) 
    {
      this.vehicle.regNumber = selectedVehicleReg;
    }
    else if(selectedVehicleReg)
    {
      this.vehicleToEdit.regNumber = selectedVehicleReg;
    }
  }

  handleVehicleKms(e:any)
  {
    const selectedKms = e?.target?.value;
    if(!this.vehicleToEdit && selectedKms)
    {
      this.vehicle.kms = selectedKms;
    }
    else if (selectedKms)
    {
      this.vehicleToEdit.kms = selectedKms;
    }
  }

  handleVehicleCancel()
  {
    this.handleCancel.emit();
  }

  handleVehicleSave()
  {
    if(!this.vehicleToEdit)
    {
      this.vehicleAPI.Create_New_Vehicle(this.vehicle)
      .subscribe(
        {
          next:(jmVehicle:any) => {
            console.log(jmVehicle);
          },
          error:(e:any) => 
          {
            console.log(e);
          }
        }
      );
    }
    else
    {
      // EDIT
      if(this.vehicleToEdit)
      {
        this.vehicleAPI.Edit_Vehicle(this.vehicleToEdit);
      }
    }
    this.handleSave.emit();
  }


  handleVehicleDelete()
  {
    if(this.vehicleToEdit)
    {
      if(confirm(`Are you sure you would like to remove the following vehicle: ${this.vehicleToEdit.name}`))
      {
        this.vehicleAPI.Delete_Vehicle(this.vehicleToEdit.id)
        .subscribe(
        {
          next:(vehicle:any) => {
            alert(`${vehicle.name} Removed Succesfully`);
            this._location.back();
          }
        }
        );
      }
    }
  }
}
