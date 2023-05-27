import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RootAPILinks } from '../RootAPILinks/RootAPILinks';
import { JM_Tool } from '../Tools/JM_Tool';
import { JM_Job } from './JM_Job';

@Injectable({
  providedIn: 'root'
})
export class JobsApiService {

  constructor(private http:HttpClient,private rootAPILinks:RootAPILinks) { }

  SaveJob(jm_Job:JM_Job) : Observable<JM_Job>
  {
    if(jm_Job)
    {
      return this.http.post<JM_Job>(`${this.rootAPILinks.rootAPI}/api/JM_Job`, jm_Job);
    }
    return new Observable<JM_Job>;
  }

  EditJob(jm_job:any)
  {
    if(jm_job)
    {
      this.http.put(`${this.rootAPILinks.rootAPI}/api/JM_Job/${jm_job.id}`,jm_job)
      .subscribe(
        {
          next:(resp) => {
            console.log(`Job Edited`);
          },
          error: (e:any) => {
            console.log(e);
          }
        }
      );
    }
  }

  GetJob(id:number):Observable<JM_Job>
  {
    if(id > 0)
    {
      return this.http.get<JM_Job>(`${this.rootAPILinks.rootAPI}/api/JM_Job/${id}`);
    }
    return new Observable<JM_Job>;
  }

  GetJobs():Observable<JM_Job>
  {
    return this.http.get<JM_Job>(`${this.rootAPILinks.rootAPI}/api/JM_Job`);
  }

  DeleteJob(id:number):Observable<JM_Job>
  {
    if(id > 0)
    {
      return this.http.delete<JM_Job>(`${this.rootAPILinks.rootAPI}/api/JM_Job/${id}`);
    }
    return new Observable<JM_Job>;
  }
}
