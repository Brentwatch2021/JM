import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jm-reactive-form',
  templateUrl: './jm-reactive-form.component.html',
  styleUrls: ['./jm-reactive-form.component.css']
})
export class JMReactiveFormComponent {

  route!:string;

  isShow:boolean = false;

  constructor(private router: Router)
  {
    this.route = this.router.url.replace('/','');
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
  }

}
