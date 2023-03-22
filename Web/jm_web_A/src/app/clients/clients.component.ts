import { Component, OnInit } from '@angular/core';
import { ClientApiService } from 'src/services/Client/client-api.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {


  constructor(private clientService:ClientApiService) {}

  ngOnInit(): void {
    this.GetClients();
  }
  
  jmClients!:any;

  private GetClients() {
    this.clientService.GetClients().subscribe(
      {
        next: (clients: any) => {
          this.jmClients = clients;
        },
        error: (e: any) => {
          console.log(`Error: ${e}`);
        }
      }
    );
  }

  handlePageRefresh()
  {
    this.GetClients();
  }
}
