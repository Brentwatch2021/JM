import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToolsAPIService } from 'src/services/Tools/tools-api.service';


@Component({
  selector: 'app-tools-details',
  templateUrl: './tools-details.component.html',
  styleUrls: ['./tools-details.component.css']
})
export class ToolsDetailsComponent implements OnInit {


  toolDetails!:any;

  constructor(private toolsAPI:ToolsAPIService,private router:Router) {}


  ngOnInit(): void {
    this.toolsAPI.GetJMTool(Number(this.router.url.replace('/tools/',''))).subscribe
    (
      {
        next:(tool:any) => 
        {
          this.toolDetails = tool;
        }
      }
    );
  }




}
