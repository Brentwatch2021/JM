import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientApiService } from 'src/services/Client/client-api.service';
import { JM_Client } from 'src/services/Client/JM_Client';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {

  jm_Client!:JM_Client;

  constructor(private clientService:ClientApiService,private router:Router) {}

  ngOnInit(): void {
    this.clientService.GetClient(Number(this.router.url.replace('/clients/','')))
    .subscribe(
      {
        next:(client:any) => {
          this.jm_Client = client;
        },
        error:(e:any) => {
          console.log(e);
        }
      }
    );
  }

}
