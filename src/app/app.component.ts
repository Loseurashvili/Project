import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'client';

  constructor(private translate: TranslateService){
    translate.addLangs(['en', 'esp', 'fr']);
    translate.setDefaultLang('en');
  }

  switchLanguage(lang: string){
    this.translate.use(lang);
  }
}
