import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TranslatorService {

  private translationUrl = 'http://localhost:9090/v1/application/translator';
  private analyseUrl = 'http://localhost:9090/v1/application/translator/analyse';
  private transUrlTextParam = '?text=';
  private translUrlLangParam = '&language=';

  constructor(private http: HttpClient) { }

  public translate(text: String, language: string): Observable<string> {
    const url = this.buildTranslationURL(text, language);
    return this.http.get(url, { responseType: 'text' });
  }

  private buildTranslationURL(text: String, language: string): string {
    return this.translationUrl +
      this.transUrlTextParam +
      text +
      this.translUrlLangParam +
      language;
  }

  public analyseLanguage(text: String): Observable<string> {
    const url = this.buildAnalysenURL(text);
    return this.http.get(url, { responseType: 'text' });
  }

  private buildAnalysenURL(text: String): string {
    return this.analyseUrl +
      this.transUrlTextParam +
      text;
  }

}
