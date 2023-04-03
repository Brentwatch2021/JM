import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { JM_User } from './JM_User';
import { Observable } from 'rxjs';
import { RootAPILinks } from './RootAPILinks/RootAPILinks';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient,private rootAPILinks:RootAPILinks) { }


  GetJM_User(id:Number):Observable<JM_User>
  {
    const header = new HttpHeaders().set('Content-type', 'application/json');
    return this.http.get<JM_User>(`${this.rootAPILinks.rootAPI}/api/JM_User/` + id,{headers:header,withCredentials:false});
  }

  GetJM_Users():Observable<JM_User>
  // GetJM_Users()
  {
    const header = new HttpHeaders().set('Content-type','application/json');
    return this.http.get<JM_User>(`${this.rootAPILinks.rootAPI}/api/JM_User`, {headers:header , withCredentials:false});
    // return this.http.get<JM_User>(`http://localhost:22537/api/JM_User`);
  }

  // this is causing an issue where the data resides in the url
  //SaveUser(user:JM_User):Observable<JM_User>
  SaveUser(user:JM_User) //currently working with it not passing to the queryparams
  {
    // Generate the formdata from the User Object
    const header = new HttpHeaders().set('Content-type', 'application/json');
    let userFormData:FormData = new FormData();
    if(user)
    {
      //userFormData.append('Name',user.Name);
      // userFormData.append('LastName',user.LastName);
      // userFormData.append('Email',user.Email);
      // when adding new formdata prop it stops the inconsistent issue here
      // //userFormData.append('MASEPOES',user.Email);
      // userFormData.append('ProfilePhoto',user.ProfilePhoto); 
      //this.http.post('http://localhost:22537/api/JM_User',userFormData,{ headers : new HttpHeaders() }).subscribe(() => alert("User Created"));
      
      // When this value is created then the method on the server side is not called for now we 
      // will process file upload separately on client and server side to avoid 
      // any unknown MASEPOES SIDE EEFECTS
      
      // Setup all the URL and File Properties for the profile photo 
      // then run a separate Api call to save the file and do overwrite if the file
      // has same name

      user.ProfilePhotoMIMEType = user.ProfilePhoto.type;
      user.ProfilePhotoURL = `UserUploadedData/User/ProfilePhotos/${user.ProfilePhoto.name}`

      const formData: FormData = new FormData();
      formData.append('profilePhoto',user.ProfilePhoto);


      // Run api call here and forget about its creation on the server side
      this.http.post(`${this.rootAPILinks.rootAPI}/api/JM_User/UploadProfilePhoto`,formData).subscribe((resp) => alert("file uploaded"));

      user.ProfilePhoto = undefined;
      

      
      // SOME KIND OF FUCKED UP INCONSISTENT ISSUE WHERE IT POSTS TO the browser params and losing context on server
      // side with regards to the Form Data been processed move the fuck on 
      //return this.http.post<JM_User>('http://localhost:22537/api/JM_User',userFormData,{ headers : new HttpHeaders() });
      //this.http.post('http://localhost:22537/api/JM_User',user,{ headers : header }).subscribe(() => alert("User Created"));
      //this.http.post('http://localhost:22537/api/JM_User',user,{ headers :header }).subscribe((response) => alert("user created"));
      this.http.post<JM_User>(`${this.rootAPILinks.rootAPI}/api/JM_User`,user,{ headers :header }).subscribe((response) => alert("user created"));
        // {
        //   next:() => {
        //     //alert("User Uploaded");
        //     eventEmitter.emit();
        //   }
        // }
      //);
      // this is causing an issue where the data resides in the url
      //return this.http.post<JM_User>('http://localhost:22537/api/JM_User',userFormData,{ headers : new HttpHeaders() });
      
    //}
    
    //return new Observable<JM_User>;
    }
  }

  EditUser(newuserDetails:any,userToEdit:any)
  {
    const userFormEditData:FormData = new FormData();
    if(newuserDetails && userToEdit)
    {
      // For this edit we are going to always run the PUT request
      // whether or not changes have been made this is not 
      // good practise as it will result in more 
      // unneccesary Server calls
      userFormEditData.append('Id',userToEdit.id);
      userFormEditData.append('Name', newuserDetails?.Name === '' ? userToEdit.name  : newuserDetails.Name);
      userFormEditData.append('LastName', newuserDetails?.LastName === '' ? userToEdit.lastName  :  newuserDetails.LastName);
      userFormEditData.append('Email',newuserDetails?.Email === '' ? userToEdit.email :  newuserDetails.Email);
      if(newuserDetails.ProfilePhoto !== undefined)
      {
        userFormEditData.append('ProfilePhoto',newuserDetails.ProfilePhoto); 
      }
      
    }

    return this.http.put(`${this.rootAPILinks.rootAPI}/api/JM_User/${userToEdit.id}`,userFormEditData, { headers : new HttpHeaders() }).subscribe(() => alert("User updated."));
  }


  DeleteUser(id:Number):Observable<JM_User>
  {
    if(id !== undefined)
    {
     return this.http.delete<JM_User>(`${this.rootAPILinks.rootAPI}/api/JM_User/${id}`);
    }
    return new Observable<JM_User>;
  }

}
