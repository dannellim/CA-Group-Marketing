import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LoaderService } from 'src/app/services/loader/loader.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private route: ActivatedRoute, private titleService: Title,
    private loader: LoaderService, private router: Router, private translate: TranslateService) { }
  async ngOnInit(): Promise<void> {
    this.loader.setLoading(true);
    await this.setWebsiteTitle();
    this.loader.setLoading(false);
  }
  websiteHeader: string = "";
  private async setWebsiteTitle() {
    // this language will be used as a fallback when a translation isn't found in the current language
    this.translate.setDefaultLang(this.translate.getBrowserLang()!);
    // the lang to use, if the lang isn't available, it will use the current loader to get them
    this.translate.use(this.translate.getBrowserLang()!);

    this.translate.get('WEBSITE_TITLE').subscribe((res: string) => {
      this.titleService.setTitle(res);
    });
    //this.websiteHeader = await this.translationService.getTranslation(lang, "website_header");
  }
}
