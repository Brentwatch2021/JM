import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ClientApiService } from 'src/services/Client/client-api.service';
import { JM_Client } from 'src/services/Client/JM_Client';
import { Location } from '@angular/common';

@Component({
  selector: 'app-jm-client-form',
  templateUrl: './jm-client-form.component.html',
  styleUrls: ['./jm-client-form.component.css']
})

export class JmClientFormComponent {
  
  @Input() isClientShow!:boolean;

  @Output() handleClientFormSave = new EventEmitter();

  @Output() handleClientFormCancel = new EventEmitter();

  @Input() clientToEdit:any;

  client:JM_Client = new JM_Client();


  constructor (private jmClientApi:ClientApiService, private locationService:Location) {}
  
  handleClientSave()
  {

    if(!this.clientToEdit)
    {
      this.SaveClient();
    }
    else
    {
      this.EditClient();
    }
    
    // execute Parent behavior for EDIT and CREATE ???????
    this.handleClientFormSave.emit();
  }
  private EditClient() {

    this.jmClientApi.EditClient(this.clientToEdit);
  }

  private SaveClient() {
    this.jmClientApi.SaveClient(this.client)
      .subscribe(
        {
          next: (client: any) => {
            console.log(client);
          },
          error: (e: any) => {
            console.log(`Error: ${e}`);
          }
        }
      );
  }

  handleClientCancel()
  {
    // execute parent behavior
    this.handleClientFormCancel.emit();
  }


  handleClientNameChange(event:any)
  {
    if(!this.clientToEdit)
    {
      // CREATE
      this.client.name = event?.target?.value;
    }
    else
    {
      // EDIT
      this.clientToEdit.name = event?.target?.value;
    }
    
  }

  handleClientLocationChange(event:any)
  {
    if(!this.clientToEdit)
    {
      this.client.location = event?.target?.value;
    }
    else
    {
      this.clientToEdit.location = event?.target?.value;
    }
  }
  
  HandleClientDelete()
  {
    if(confirm(`Are you sure you would like to Delete this Client: ${this.clientToEdit.name}`))
    {
      // Iniate the Delete Service
      this.jmClientApi.DeleteClient(this.clientToEdit.id)
      .subscribe({
          next:(client:any) => {
            // We can implement an event emitter to emit
            // to the parent list to refresh and provide notification
            this.locationService.back();
          },
          error:(e:any) => {
            console.log(e);
          }

      });

    }
  }
}
