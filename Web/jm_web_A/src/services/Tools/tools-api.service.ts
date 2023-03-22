import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JM_Tool } from './JM_Tool';

@Injectable({
  providedIn: 'root'
})
export class ToolsAPIService {

  constructor(private http:HttpClient) { }

  apiBaseURL:string = "http://localhost:22537/"

  GetJMTools():Observable<JM_Tool>
  {
    return this.http.get<JM_Tool>(`${this.apiBaseURL}api/JM_Tool`);
  }

  GetJMTool(id:Number):Observable<JM_Tool>
  {
    return this.http.get<JM_Tool>(`${this.apiBaseURL}api/JM_Tool/${id}`);
  }

  EditJMTool(jmToolToEdit:any)
  {
    this.http.put(`${this.apiBaseURL}api/JM_Tool/${jmToolToEdit.id}`,jmToolToEdit).subscribe((resp:any) => alert("Tool Updated"));
  }

  DeleteJMTool(id:Number):Observable<JM_Tool>
  {
    return this.http.delete<JM_Tool>(`${this.apiBaseURL}api/JM_Tool/${id}`);
  }

  SaveJMTool(jmTool:JM_Tool):Observable<JM_Tool>
  {
    try 
    {
      return this.http.post<JM_Tool>(`${this.apiBaseURL}api/JM_Tool`,jmTool);
    }
    catch(e:any)
    {
      console.log(e);
    }
    return new Observable<JM_Tool>;
  }


}
