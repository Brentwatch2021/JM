import { Component, Input, OnInit,Output,EventEmitter } from '@angular/core';
import { JM_Tool } from 'src/services/Tools/JM_Tool';
import { ToolsAPIService } from 'src/services/Tools/tools-api.service';
import { UserServiceService } from 'src/services/user-service.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-jm-tools-form',
  templateUrl: './jm-tools-form.component.html',
  styleUrls: ['./jm-tools-form.component.css']
})
export class JmToolsFormComponent implements OnInit {

  @Input() isToolShow!:boolean;

  JMUsers!:any;

  // Parent event emitters
  @Output() handleCancel = new EventEmitter();
  @Output() handleSave = new EventEmitter();
  
  @Input() jmToolToEdit!:any;

  jmTool:JM_Tool = new JM_Tool();

  constructor(private userAPI:UserServiceService,private toolAPI:ToolsAPIService, private _location:Location) {}

  ngOnInit(): void {
    this.userAPI.GetJM_Users().subscribe(
      {
        next:(jmusers:any) => {
          this.JMUsers = jmusers;
        },
        error:(e:any) => {
          console.log(e);
        }
      }
    );
  }

  handleToolSave()
  {

    if(!this.jmToolToEdit)
    {
      // Create
      this.SaveTool();
    }
    else
    {
      // Edit
      this.EditTool();
    }

    // Call parent behavior
    this.handleSave.emit();
  }
  
  private EditTool() {
    this.toolAPI.EditJMTool(this.jmToolToEdit);
  }

  private SaveTool() {
    this.toolAPI.SaveJMTool(this.jmTool).subscribe(
      {
        next: (tool: any) => {
          console.log(tool);
          alert(`The tool: ${tool.name} was created succesfully`);
        },
        error: (e: any) => {
          console.log(e);
        }
      }
    );
  }

  handleToolCancel()
  {
    this.handleCancel.emit();
  }

  handleToolNameChange(e:any)
  {
    if(!this.jmToolToEdit)
    {
      this.jmTool.Name =  e?.target?.value;
    }
    else
    {
      this.jmToolToEdit.name = e?.target?.value;
    }
    
  }

  handleSelectAssignedTo(e:any)
  {
    this.jmTool.AssignedTo = Number(e?.target?.value);
  }


  handleToolDelete()
  {
    if(this.jmToolToEdit)
    {
      if(confirm(`Are you sure you would like to delete this tool: ${this.jmToolToEdit.name}?`))
      {
        this.toolAPI.DeleteJMTool(Number(this.jmToolToEdit.id))
      .subscribe(
        {
          next:(deletedTool:any) =>
          {
            alert(`The tool: ${deletedTool.name} has been succesfully Removed`);
            // navigate back to list
            this._location.back();
          },
          error:(e:any) => 
          {
            alert(`Error in deletion of tool: ${e}`);
          }
        }
      );
      }
      
    }
  }
}
