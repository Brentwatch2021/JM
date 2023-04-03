import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VehiclesAPIService } from 'src/services/Vehicle/vehicles-api.service';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.css']
})
export class VehicleDetailsComponent implements OnInit
{

  jmVehicleDetail:any;

  constructor(private vehiclesAPI:VehiclesAPIService,private router:Router) {}

  ngOnInit(): void {
    this.vehiclesAPI.Load_Vehicle(Number(this.router.url.replace('/vehicles/','')))
    .subscribe(
      {
        next:(vehicle:any) => 
        {
          this.jmVehicleDetail = vehicle;
        },
        error:(e:any) =>
        {
          console.log(e);
        }
      }
    );
  }

}
