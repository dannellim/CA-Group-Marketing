import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private static readonly SUPPORTED_LANGUAGES = ["fr", "en", "de"];
  private static readonly LANGUAGES_API = "https://raw.githubusercontent.com/dannellim/ca_group/main/src/assets/i18n/";
  constructor() { }
  isLanguageSupported(language: string | null): boolean {
    if (language) {
      return ConfigService.SUPPORTED_LANGUAGES.includes(language.toLowerCase());
    }
    return false;
  }
  getSupportedLanguages(): string[] {
    return ConfigService.SUPPORTED_LANGUAGES;
  }
  getLanguagesApi(): string {
    return ConfigService.LANGUAGES_API;
  }
}