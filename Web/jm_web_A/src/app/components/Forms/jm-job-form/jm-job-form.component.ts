import { Component,Input,Output,EventEmitter } from '@angular/core';
import { JM_Job } from 'src/services/Job/JM_Job';
import { JobsApiService } from 'src/services/Job/jobs-api.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-jm-job-form',
  templateUrl: './jm-job-form.component.html',
  styleUrls: ['./jm-job-form.component.css']
})
export class JmJobFormComponent {

  @Input() isJobShow!:boolean;

  @Output() handleSave = new EventEmitter();

  @Output() handleCancel = new EventEmitter();

  @Input() jmJobToEdit:any;

  jm_Job:JM_Job = new JM_Job();

  constructor(private jobAPI:JobsApiService,private _location:Location) {}

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
}
