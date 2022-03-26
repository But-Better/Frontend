import { Component, OnInit } from '@angular/core';
import { TranslatorService } from '../service/translator.service';

@Component({
  selector: 'app-translator',
  templateUrl: './translator.component.html',
  styleUrls: ['./translator.component.css']
})
export class TranslatorComponent implements OnInit {

  private textInput: string = '';
  private languageInput: string = '';
  translatedText: string = '';
  analysedLanguage: string = '';



  constructor(private translatorService: TranslatorService) { }

  ngOnInit(): void {
  }

  translate(text: string, language: string) {
    this.textInput = text;
    this.languageInput = language;
    console.log("got this as text input: " + this.textInput);
    console.log("got this as language input: " + this.languageInput);

    this.translatorService.translate(this.textInput, this.languageInput).subscribe(translation => this.translatedText = translation);
    console.log("recieved this as translation: " + this.translatedText);
  }

  getLanguage(text: string) {
    this.textInput = text;
    console.log("got this as text input: " + this.textInput);

    this.translatorService.analyseLanguage(text).subscribe(language => this.analysedLanguage = this.shortToLongLanguage(language));
    console.log("recieved this as language: " + this.analysedLanguage);
  }

  private shortToLongLanguage(shortLang: string): string {
    switch (shortLang) {
      case '"DE"': return 'German';
      case '"EN"': return 'English';
      case '"BG"': return 'Bulgarian';
      case '"CS"': return 'Czech';
      case '"DA"': return 'Danish';
      case '"EL"': return 'Greek';
      case '"ES"': return 'Spanish';
      case '"ET"': return 'Estonian';
      case '"FI"': return 'Finish';
      case '"FR"': return 'French';
      case '"HU"': return 'Hungarian';
      case '"IT"': return 'Italian';
      case '"JA"': return 'Japanese';
      case '"LT"': return 'Lithuanian';
      case '"LV"': return 'Latvian';
      case '"NL"': return 'Dutch';
      case '"PL"': return 'Polish';
      case '"PT"': return 'Portugese';
      case '"RO"': return 'Romanian';
      case '"RU"': return 'Russian';
      case '"SK"': return 'Slovak';
      case '"SL"': return 'Slovenian';
      case '"SV"': return 'Swedish';
      case '"ZH"': return 'Chinese';
      default: return 'Unknown';
    }
  }

}
