import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private static readonly SUPPORTED_LANGUAGES = ["fr", "en", "de"];
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
}