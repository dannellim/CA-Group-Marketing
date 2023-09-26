import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '../../services/translation/translate.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private route: ActivatedRoute, private titleService: Title, private translationService: TranslateService) { }
  async ngOnInit(): Promise<void> {
    await this.setWebsiteTitle();
  }
  private async setWebsiteTitle() {
    const lang = this.route.snapshot.paramMap.get('lang');
    var website_title = await this.translationService.getTranslation(lang, "website_title");
    this.titleService.setTitle(website_title);
  }
}
