import { Component,EventEmitter,Input,Output } from '@angular/core';

@Component({
  selector: 'app-jm-job-tasks-form',
  templateUrl: './jm-job-tasks-form.component.html',
  styleUrls: ['./jm-job-tasks-form.component.css']
})
export class JmJobTasksFormComponent {

  @Input() isJobTasksShow:boolean = false;

  @Output() handleTaskJobSave = new EventEmitter<any>();

  @Output() handleTaskJobCancel = new EventEmitter();

  task:string = "";

  handleTaskChange(event:any)
  {
    this.task = event?.target?.value;
  }


  handleTaskCancel()
  {
    this.handleTaskJobCancel.emit();
  }

  handleTaskSave()
  {
    this.handleTaskJobSave.emit(this.task);
  }

}
