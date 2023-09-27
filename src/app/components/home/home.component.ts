import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '../../services/translation/translate.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LoaderService } from 'src/app/services/loader/loader.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private route: ActivatedRoute, private titleService: Title, private translationService: TranslateService,
    private loader: LoaderService, private router: Router) { }
  async ngOnInit(): Promise<void> {
    this.loader.setLoading(true);
    await this.setWebsiteTitle();
    this.loader.setLoading(false);
  }
  websiteHeader: string = "";
  private async setWebsiteTitle() {
    const lang = this.route.snapshot.paramMap.get('lang');
    console.log("parameter lang: " + lang);
    const userLocale = navigator.languages && navigator.languages.length
      ? navigator.languages[0]
      : navigator.language;
    console.log("device lang: " + userLocale);
    if (lang?.toLowerCase() != userLocale.substring(0, 2).toLowerCase())
      this.router.navigate(['/home/' + userLocale.substring(0, 2).toLowerCase()]);
    var website_title = await this.translationService.getTranslation(lang, "website_title");
    this.titleService.setTitle(website_title);
    this.websiteHeader = await this.translationService.getTranslation(lang, "website_header");
  }
}
