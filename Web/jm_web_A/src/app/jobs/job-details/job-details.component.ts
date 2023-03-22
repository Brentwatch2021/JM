import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JM_Job } from 'src/services/Job/JM_Job';
import { JobsApiService } from 'src/services/Job/jobs-api.service';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent implements OnInit {

  jm_Job!:JM_Job;

  constructor(private jobAPI:JobsApiService,private router:Router) {}

  ngOnInit(): void {
    this.jobAPI.GetJob(Number(this.router.url.replace('/jobs/','')))
    .subscribe(
      {
        next:(job:JM_Job) => {
          this.jm_Job = (job as JM_Job);
        },
        error:(e:any) => {
          console.log(e);
        }
      }
    );
  }




}
