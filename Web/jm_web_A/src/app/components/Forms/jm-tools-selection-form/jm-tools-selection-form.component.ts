import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToolsAPIService } from 'src/services/Tools/tools-api.service';

@Component({
  selector: 'app-jm-tools-selection-form',
  templateUrl: './jm-tools-selection-form.component.html',
  styleUrls: ['./jm-tools-selection-form.component.css']
})
export class JmToolsSelectionFormComponent implements OnInit {

@Input() isSelectShow:boolean = false;

@Output() handlejobToolsSave = new EventEmitter<any>();

@Output() handlejobToolsCancel = new EventEmitter();



jmtools:any;
jmSelectedTools:any;

constructor (private toolsAPI:ToolsAPIService) {}

ngOnInit(): void {
  this.GetToolsToSelect();
}

handleSelectionSave()
{
  this.handlejobToolsSave.emit(this.jmSelectedTools.filter((tool:any) => tool.selected));
}

handleSelectionCancel()
{
  this.handlejobToolsCancel.emit();
}

  private GetToolsToSelect() {
    // Implement a way to only select tools that are not checkedout tools
    this.toolsAPI.GetJMTools()
      .subscribe(
        {
          next: (tools: any) => {

            this.jmSelectedTools = tools.map((tool:any) => ({
              ...tool,
              selected: false
            }))
          },
          error: (e: any) => {
            console.log();
          }
        }
      );
  }
}
