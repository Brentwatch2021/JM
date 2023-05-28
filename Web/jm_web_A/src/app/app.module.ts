import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { HomeDashboardComponent } from './home-dashboard/home-dashboard.component';
import { JobsComponent } from './jobs/jobs.component';
import { ClientsComponent } from './clients/clients.component';
import { ToolsComponent } from './tools/tools.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { UsersComponent } from './users/users.component';
import { CurrentUserSettingsComponent } from './current-user-settings/current-user-settings.component';
import { JMReactiveFormComponent } from './components/jm-reactive-form/jm-reactive-form.component';
import { JmUserFormComponent } from './components/Forms/jm-user-form/jm-user-form.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { JmClientFormComponent } from './components/Forms/jm-client-form/jm-client-form.component';
import { ClientDetailsComponent } from './clients/client-details/client-details.component';
import { JmToolsFormComponent } from './components/Forms/jm-tools-form/jm-tools-form.component';
import { ToolsDetailsComponent } from './tools/tools-details/tools-details.component';
import { JmJobFormComponent } from './components/Forms/jm-job-form/jm-job-form.component';
import { JobDetailsComponent } from './jobs/job-details/job-details.component';
import { JmVehicleFormComponent } from './components/Forms/jm-vehicle-form/jm-vehicle-form.component';
import { VehicleDetailsComponent } from './vehicles/vehicle-details/vehicle-details.component';
import { JmToolsSelectionFormComponent } from './components/Forms/jm-tools-selection-form/jm-tools-selection-form.component';
import { FormsModule } from '@angular/forms';
import { JmJobTasksFormComponent } from './components/Forms/jm-job-tasks-form/jm-job-tasks-form.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    SideBarComponent,
    HomeDashboardComponent,
    JobsComponent,
    ClientsComponent,
    ToolsComponent,
    VehiclesComponent,
    UsersComponent,
    CurrentUserSettingsComponent,
    JMReactiveFormComponent,
    JmUserFormComponent,
    UserDetailsComponent,
    JmClientFormComponent,
    ClientDetailsComponent,
    JmToolsFormComponent,
    ToolsDetailsComponent,
    JmJobFormComponent,
    JobDetailsComponent,
    JmVehicleFormComponent,
    VehicleDetailsComponent,
    JmToolsSelectionFormComponent,
    JmJobTasksFormComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component:HomeDashboardComponent },
      { path: 'jobs', component:JobsComponent },
      { path: 'jobs/:jobId', component:JobDetailsComponent },
      { path: 'clients', component:ClientsComponent },
      { path: 'clients/:clientId', component:ClientDetailsComponent },
      { path: 'tools', component:ToolsComponent },
      { path: 'tools/:toolId', component:ToolsDetailsComponent },
      { path: 'vehicles', component:VehiclesComponent },
      { path: 'vehicles/:vehicleId', component:VehicleDetailsComponent },
      { path: 'users', component:UsersComponent },
      { path: 'users/:userId', component:UserDetailsComponent },
      { path: 'current_user_settings', component:CurrentUserSettingsComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
