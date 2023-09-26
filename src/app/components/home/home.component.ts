import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '../../services/translation/translate.service';
import { ActivatedRoute } from '@angular/router';
import { LoaderService } from 'src/app/services/loader/loader.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private route: ActivatedRoute, private titleService: Title, private translationService: TranslateService,
    private loader: LoaderService) { }
  async ngOnInit(): Promise<void> {
    this.loader.setLoading(true);
    await this.setWebsiteTitle();
    this.loader.setLoading(false);
  }
  private async setWebsiteTitle() {
    const lang = this.route.snapshot.paramMap.get('lang');
    var website_title = await this.translationService.getTranslation(lang, "website_title");
    this.titleService.setTitle(website_title);
  }
}
