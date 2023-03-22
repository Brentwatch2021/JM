import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JM_Client } from './JM_Client';

@Injectable({
  providedIn: 'root'
})
export class ClientApiService {

  constructor(private http:HttpClient) { }

  apiBaseURL:string = 'http://localhost:22537/';

  DeleteClient(id:Number):Observable<JM_Client>
  {
    return this.http.delete<JM_Client>(`${this.apiBaseURL}api/JM_Client/${id}`);
  }


  EditClient(jmclientToEdit:JM_Client)
  {
    this.http.put(`${this.apiBaseURL}api/JM_Client/${jmclientToEdit.id}`,jmclientToEdit).subscribe((resp:any) => alert("Client Updated"));
  }

  GetClient(id:Number):Observable<JM_Client>
  {
    return this.http.get<JM_Client>(`${this.apiBaseURL}api/JM_Client/${id}`);
  }

  GetClients():Observable<JM_Client>
  {
    return this.http.get<JM_Client>(`${this.apiBaseURL}api/JM_Client`);
  }

  SaveClient(jm_client:JM_Client):Observable<JM_Client>
  {
    const header = new HttpHeaders().set('Content-type', 'application/json');
    return this.http.post<JM_Client>(`${this.apiBaseURL}api/JM_Client`,jm_client);
  }
}
