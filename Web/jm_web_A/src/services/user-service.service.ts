import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { JM_User } from './User';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }

  apiURL:string = 'http://localhost:22537/';


  GetJM_Users():Observable<JM_User>
  // GetJM_Users()
  {
    const header = new HttpHeaders().set('Content-type','application/json');
    return this.http.get<JM_User>(`http://localhost:22537/api/JM_User`, {headers:header , withCredentials:false});
    // return this.http.get<JM_User>(`http://localhost:22537/api/JM_User`);
  }

  SaveUser(user:JM_User)
  {
    // Generate the formdata from the User Object
    const userFormData:FormData = new FormData();
    if(user)
    {
      userFormData.append('Name',user.Name);
      userFormData.append('LastName',user.LastName);
      userFormData.append('Email',user.Email);
      userFormData.append('ProfilePhoto',user.ProfilePhoto); 
    }

    return this.http.post('http://localhost:22537/api/JM_User',userFormData,{ headers : new HttpHeaders() }).subscribe(() => alert("File Uploaded"));
  }
}
