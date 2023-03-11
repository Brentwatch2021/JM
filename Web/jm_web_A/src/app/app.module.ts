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
    JmUserFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component:HomeDashboardComponent },
      { path: 'jobs', component:JobsComponent },
      { path: 'clients', component:ClientsComponent },
      { path: 'tools', component:ToolsComponent },
      { path: 'vehicles', component:VehiclesComponent },
      { path: 'users', component:UsersComponent },
      { path: 'current_user_settings', component:CurrentUserSettingsComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
