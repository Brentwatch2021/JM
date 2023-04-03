import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RootAPILinks } from '../RootAPILinks/RootAPILinks';
import { JM_User } from '../JM_User';
import { JM_Vehicle } from './JM_Vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehiclesAPIService {

  constructor(private rootAPILinks:RootAPILinks,private http:HttpClient) { }

  Create_New_Vehicle(jm_Vehicle:JM_Vehicle):Observable<JM_Vehicle>
  {
    if(jm_Vehicle.vehicle_Photo)
    {
      jm_Vehicle.vehicle_Image_Path = `UserUploadedData/Vehicles/${jm_Vehicle?.vehicle_Photo?.name}`;
      jm_Vehicle.vehicle_Image_MIME_Type = jm_Vehicle?.vehicle_Photo?.type;
      const formData:FormData = new FormData();
      formData.append(`imageOfVehicle`, jm_Vehicle.vehicle_Photo);
      this.http.post(`${this.rootAPILinks.rootAPI}/api/JM_Vehicle/UploadVehicleImage`,formData).subscribe(resp => console.log(resp));
      jm_Vehicle.vehicle_Photo = undefined;
    }

    if(jm_Vehicle.assignedTo)
    {
      jm_Vehicle.assignedTo = Number(jm_Vehicle.assignedTo);
    }

    return this.http.post<JM_Vehicle>(`${this.rootAPILinks.rootAPI}/api/JM_Vehicle`,jm_Vehicle);
  }

  Edit_Vehicle(jm_Vehicle:JM_Vehicle)
  {
    this.http.put(`${this.rootAPILinks.rootAPI}/api/JM_Vehicle/${jm_Vehicle.id}`,jm_Vehicle).subscribe(resp => console.log(resp));
  }

  Delete_Vehicle(id:Number):Observable<JM_Vehicle>
  {
    return this.http.delete<JM_Vehicle>(`${this.rootAPILinks.rootAPI}/api/JM_Vehicle/${id}`);
  }

  Load_Vehicle(id:Number):Observable<JM_Vehicle>
  {
    return this.http.get<JM_Vehicle>(`${this.rootAPILinks.rootAPI}/api/JM_Vehicle/${id}`);
  }

  Load_Vehicles():Observable<JM_Vehicle>
  {
    return this.http.get<JM_Vehicle>(`${this.rootAPILinks.rootAPI}/api/JM_Vehicle`);
  }

}
