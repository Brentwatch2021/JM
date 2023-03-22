import { Component, EventEmitter, Input,Output } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/services/user-service.service';

@Component({
  selector: 'app-jm-reactive-form',
  templateUrl: './jm-reactive-form.component.html',
  styleUrls: ['./jm-reactive-form.component.css']
})
export class JMReactiveFormComponent {

  route!:string;

  isShow:boolean = false;

  @Output() handleSectionPageRefresh = new EventEmitter();

  @Input() itemToEdit:any;

  constructor(private router: Router, private userService:UserServiceService)
  {
    // Improve the routing to use route paramters with 
    // activatedRoute to improve for editing of the form as for example
    // there is a bug
    // TODO this is extremely dirty but its prototype time 

    // USERS Bad Implementation
    this.route = this.router.url.includes('users') ? 'users' : this.route;

    // CLIENTS BAD Implementation
    this.route = this.router.url.includes('clients') ? 'clients' : this.route;

    // TOOLS BAD Implementation
    this.route = this.router.url.includes('tools') ? 'tools' : this.route;

    // JOBS BAD Implementation
    this.route = this.router.url.includes('jobs') ? 'jobs' : this.route;
  }

  selectForm()
  {
    this.isShow = true;
  }

  handleFormCancel()
  {
    this.isShow = false;
  }

  handleFormSave()
  {
    this.isShow = false;

    // This will be a refresh method that can will be iniated from all
    // Create methods on any dynamic form child been users, tools etc
    this.handleSectionPageRefresh.emit();
  }

  

}
