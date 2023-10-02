import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ConfigService } from 'src/app/services/config/config.service';

@Component({
  selector: 'app-language-bar',
  templateUrl: './language-bar.component.html',
  styleUrls: ['./language-bar.component.css']
})
export class LanguageBarComponent {
  constructor(private translate: TranslateService, private config: ConfigService) {
    this.selectLang = this.translate.getBrowserLang()?? "en";
    // this language will be used as a fallback when a translation isn't found in the current language
    this.translate.setDefaultLang(this.selectLang);
    // the lang to use, if the lang isn't available, it will use the current loader to get them
    this.translate.use(this.selectLang);
  }
  selectLang: string = "";
  TransLang: string[] = [];
  setTransLanguage() {
    this.translate.use(this.selectLang);
  }
  getTransLanguage() {
    this.TransLang = this.config.getSupportedLanguages();
  }
  ngOnInit() {
    this.getTransLanguage();
  }
}
