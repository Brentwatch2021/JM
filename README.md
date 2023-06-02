# JM

This application was meant to be an application that records jobs processed in contruction teams and when the client requests
a job card form to be filled out the user would be able to enter all required info into app and for each client there would be 
a different template allowing the technician to send an pdf filled out via mobile and not writing it out wasting time.

Other features would include the ability to generate qoutes from previous jobs whereby each jobcard would have the payslips saved to the job
and therefore allowing the app to calculate certian mundane jobs in certain areas. Example Roller shutter door gets installed in X location
all payslips are processed by the app. A new client in the area makes the same request in the same area then looking at logistic costs on that previous job the user would be able to make better and quicker qoutes for new clients as opposed to flipping through paperback folders etc.



Folder Structure:

  Mobile: React Native folder just the template no work completed here
  
  
  Server Side: .Net Core Web API(POST,GET,PUT,DELETE) and Entity Framework Core 
  
  
  
  Web: jm_web_A is an Angular 15 App
  
  
  Techincal Setup:
  
  Clone the Repo.
  
  Angular Front End:
  
  Open the jm_web_A in VS Code and run npm install.
  run ng serve to run the angular app
  
  Backend:
  
  .net core 3.1 and entity framework core 
  
  setup:
  
  - update the sql connection string for MSSQL Database run the update-database in the package manager console.
  - and run the app in IIS.

You should be able to complete all CRUD Operations.
