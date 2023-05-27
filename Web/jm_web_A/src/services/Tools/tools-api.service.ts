import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RootAPILinks } from '../RootAPILinks/RootAPILinks';
import { JM_Tool } from './JM_Tool';

@Injectable({
  providedIn: 'root'
})
export class ToolsAPIService {

  constructor(private http:HttpClient,private rootAPILinks:RootAPILinks) { }

  GetJMTools():Observable<JM_Tool>
  {
    return this.http.get<JM_Tool>(`${this.rootAPILinks.rootAPI}/api/JM_Tool`);
  }

  GetJMTool(id:number):Observable<JM_Tool>
  {
    return this.http.get<JM_Tool>(`${this.rootAPILinks.rootAPI}/api/JM_Tool/${id}`);
  }

  EditJMTool(jmToolToEdit:any)
  {
    this.http.put(`${this.rootAPILinks.rootAPI}/api/JM_Tool/${jmToolToEdit.id}`,jmToolToEdit).subscribe((resp:any) => alert("Tool Updated"));
  }

  DeleteJMTool(id:number):Observable<JM_Tool>
  {
    return this.http.delete<JM_Tool>(`${this.rootAPILinks.rootAPI}/api/JM_Tool/${id}`);
  }

  SaveJMTool(jmTool:JM_Tool):Observable<JM_Tool>
  {
    try 
    {
      if(jmTool.Image_Of_Tool)
      {
        jmTool.tool_Image_MIME_Type = jmTool?.Image_Of_Tool?.type;   
        jmTool.Tool_Image_Path = `UserUploadedData/Tools/${jmTool.Image_Of_Tool.name}`;
        const formData: FormData = new FormData();
        formData.append('imageOfTool',jmTool.Image_Of_Tool); 
        this.http.post(`${this.rootAPILinks.rootAPI}/api/JM_Tool/UploadImageOfTool`, formData).subscribe(resp => alert("File Uploaded"));
        jmTool.Image_Of_Tool = undefined;
      }

      return this.http.post<JM_Tool>(`${this.rootAPILinks.rootAPI}/api/JM_Tool`,jmTool);
    }
    catch(e:any)
    {
      console.log(e);
    }
    return new Observable<JM_Tool>;
  }


}
