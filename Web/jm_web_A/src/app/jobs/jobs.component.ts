import { Component,OnInit } from '@angular/core';
import { JobsApiService } from 'src/services/Job/jobs-api.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
  
  constructor (private jobsApi:JobsApiService) {}
  
  jmJobs!:any;

  ngOnInit(): void {
    this.jobsApi.GetJobs()
    .subscribe({
      next: (jobs:any) =>
      {
        console.log(jobs);
        this.jmJobs = jobs;
      },
      error:(e:any) => 
      {
        console.log(e);
      }
    })
  }

}
