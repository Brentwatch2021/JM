import { Component,Input,Output,EventEmitter, OnInit } from '@angular/core';
import { JM_Job } from 'src/services/Job/JM_Job';
import { JobsApiService } from 'src/services/Job/jobs-api.service';
import { Location } from '@angular/common';
import { UserServiceService } from 'src/services/user-service.service';
import { ToolsAPIService } from 'src/services/Tools/tools-api.service';

@Component({
  selector: 'app-jm-job-form',
  templateUrl: './jm-job-form.component.html',
  styleUrls: ['./jm-job-form.component.css']
})
export class JmJobFormComponent implements OnInit {

  @Input() isJobShow!:boolean;

  @Output() handleSave = new EventEmitter();

  @Output() handleCancel = new EventEmitter();

  @Input() jmJobToEdit:any;

  jm_Job:JM_Job = new JM_Job();

  jmUsers:any;

  jmTools:any;

  jmTasks:string[] = [];

  isSelectTools:boolean = false;

  isAddTask:boolean = false;

  constructor(private jobAPI:JobsApiService,private _location:Location,private usersAPI:UserServiceService,private jmToolsAPI:ToolsAPIService) {}
  
  ngOnInit(): void {
    this.GetJMUsersForDropDown();
    // this.jmToolsAPI.GetJMTools().subscribe(
    //   {
    //     next:(tools:any) => {
    //       this.jmTools = tools;
    //     },
    //     error:(e:any) => 
    //     {
    //       console.log(e);
    //     }
    //   }
    // );
  }

  handleAddTask()
  {
    this.isAddTask = true;
  }

  handleTaskCancel()
  {
    this.isAddTask = false;
  }

  handleTaskSave(task:any)
  {
    this.jmTasks.push(task);
    //alert(task);
    this.isAddTask = false;
  }

  handlejobToolsSaveForm(jmSelectedTools:any)
  {
    jmSelectedTools.forEach((tool:any) => {
      delete tool.selected;
    });

    //alert(jmSelectedTools);
    // Set the list of tools to the current
    // not sure if this is the correct way of updating binded properties 
    // need to investigate
    this.jmTools = jmSelectedTools;
    this.isSelectTools = false;
  }

  handlejobToolsCancelForm()
  {
    this.isSelectTools = false;
  }

  private GetJMUsersForDropDown() {
    this.usersAPI.GetJM_Users().subscribe(
      {
        next: (users: any) => {
          this.jmUsers = users;
        }
      }
    );
  }

  handleJobSave()
  {
    if(!this.jmJobToEdit)
    {
      this.SaveJobApi();
    }
    else
    {
      this.EditJobApi();
    }

    this.handleSave.emit();
  }
  
  private SaveJobApi() {

    // Add the list of tools and tasks to the job

    // list of IDs for tools and concatenate all the tasks into the string
    //taskList:string = "";
    // toolsUsed:string = "";

    // Remember about edits
    // this.jmTools.forEach((tool:any) => {
    //   this.jm_Job.toolsUsed += " ID: " + tool.id;
    // })
    // this.jmTasks.forEach(task => {
    //   this.jm_Job.taskList += " Task: " + task;
    // })

    this.jobAPI.SaveJob(this.jm_Job)
    .subscribe(
      {
        next:(job:any) => {
          console.log(job);
        },
        error:(e:any) => {
          console.log(e);
        }
      }
    );
  }

  private EditJobApi() {
    if(this.jmJobToEdit)
    {
      this.jobAPI.EditJob(this.jmJobToEdit);
    }
  }

  HandleJobRemove()
  {
    if(this.jmJobToEdit)
    {
      this.jobAPI.DeleteJob(Number(this.jmJobToEdit.id)).subscribe(
        {
          next:(Remomvedjob:JM_Job) => 
          {
            alert(`Job Removed: ${Remomvedjob.activity}`);
            console.log(Remomvedjob);
            this._location.back();
          }
        }
      );
    }
  }

  handleJobCancel()
  {
    this.handleCancel.emit();
  }

  handleJobDelete()
  {
    if(!this.jmJobToEdit)
    {
      // confirm message and then Api call
    }
  }

  handlejobActivityChange(event:any)
  {
    if(!this.jmJobToEdit)
    {
      this.jm_Job.activity = event?.target?.value;
      
    }
    else
    {
      this.jmJobToEdit.activity = event?.target?.value;
    }
  }

  handleTechnicianSelection(e:any)
  {
    const technicanID = e?.target?.value;
    if(!this.jmJobToEdit)
    {
      this.jm_Job.technician = technicanID;
    }
    else
    {
      this.jmJobToEdit.technician = technicanID;
    }
  }

  handleToolSelection(e:any)
  {
    this.isSelectTools = true;
  }
}
