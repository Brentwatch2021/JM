
import { Component,OnInit } from '@angular/core';
import { ToolsAPIService } from 'src/services/Tools/tools-api.service';
import { Store,select } from '@ngrx/store';
import { AppState } from '../app.state';
import { setLanguage } from '../app.actions';



@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.css']
})
export class ToolsComponent implements OnInit {
  
  language?:string;

  tools!:any;

  constructor(private store:Store<AppState>, private toolsApi:ToolsAPIService) {}

  

  ngOnInit(): void {

    this.store.pipe(select((state: AppState) => state.language)).subscribe((language) =>
    {
      this.language = language;
      console.log("The Language: " + this.language);
    });

    this.store.dispatch(setLanguage({ language: 'en' }));
    
    //console.log("Tools State from language: " + 
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
