import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
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
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.loader.setLoading(true);
      this.translate.get('WEBSITE_TITLE').subscribe((res: string) => {
        this.titleService.setTitle(res);
        this.loader.setLoading(false);
      });
    });
  }
}
