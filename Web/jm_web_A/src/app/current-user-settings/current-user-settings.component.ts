import { Component } from '@angular/core';

@Component({
  selector: 'app-current-user-settings',
  templateUrl: './current-user-settings.component.html',
  styleUrls: ['./current-user-settings.component.css']
})
export class CurrentUserSettingsComponent {


  handleLangChange(e:any)
  {
    const lang = e?.target?.value;
    console.log("Howzit: " + lang);
  }
}
