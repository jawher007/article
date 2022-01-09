import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Article } from './models/article.model';
import { ArticleService } from './services/article.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'article';
  article: Article | undefined;
  sub: Subscription = new Subscription();
  constructor(private articleService: ArticleService) {}

  ngOnInit() {
    this.sub = this.articleService
      .getConfig()
      .subscribe((x) => (this.article = x));
  }
}
