import { Component, OnInit } from '@angular/core';
import { VehiclesAPIService } from 'src/services/Vehicle/vehicles-api.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {
  

  jmVehicles:any;

  constructor (private vehiclesAPI:VehiclesAPIService) { }

  ngOnInit(): void {
    this.vehiclesAPI.Load_Vehicles().
    subscribe({
      next:(jmVehicles:any) => {
        this.jmVehicles = jmVehicles;
      },
      error:(e:any) => {
        console.log(e);
      }
    });
  }


  


}
