import { Injectable } from '@angular/core';
import { LanguageJsonService } from '../language-json/language-json.service';
import { ConfigService } from '../config/config.service';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {
  private static LANGUAGE_JSON: string;
  constructor(private langJson: LanguageJsonService, private configService: ConfigService) { }
  async getTranslation(lang: string | null, key: string): Promise<string> {
    var chosenLanguage = "en";
    if (lang) chosenLanguage = lang;
    if (!this.configService.isLanguageSupported(chosenLanguage)) {
      console.log("language not supported, defaulting to english");
      chosenLanguage = "en";
    }
    var translation = "";
    try {
      if (!TranslateService.LANGUAGE_JSON) {
        console.log("translation cache is null. loading from endpoint");
        TranslateService.LANGUAGE_JSON = await this.langJson.getLanguageJson(chosenLanguage);
      }
      console.log("key: " + key);
      translation = JSON.parse(TranslateService.LANGUAGE_JSON)[key];
      console.log("translation " + translation);
      if (translation) return translation;
    }
    catch (err) {
      console.log(err);
    }
    return translation;
  }
}
