
import { Component,OnInit } from '@angular/core';
import { ToolsAPIService } from 'src/services/Tools/tools-api.service';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.css']
})
export class ToolsComponent implements OnInit {
  
  tools!:any;

  constructor(private toolsApi:ToolsAPIService) {}

  ngOnInit(): void {
    this.toolsApi.GetJMTools().subscribe(
      {
        next:(tools:any) => {
          console.log(`The list of tools: ${tools}`);
          this.tools = tools;
        },
        error:(e:any) => 
        {
          alert(e);
        }
      }
    );
  }

  
  
  PageRefresh()
  {
    // This is to refresh the list of items in teh list
  }

  GetTools()
  {

  }
}
