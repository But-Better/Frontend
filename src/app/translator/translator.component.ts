import { Component, OnInit } from '@angular/core';
import { TranslatorService } from '../service/translator.service';

@Component({
  selector: 'app-translator',
  templateUrl: './translator.component.html',
  styleUrls: ['./translator.component.css']
})
export class TranslatorComponent implements OnInit {

  private textInput:string = '';
  private languageInput:string='';
  translatedText:string = '';



  constructor(private translatorService:TranslatorService) { }

  ngOnInit(): void {
  }

  translate(text:string,language:string){
    this.textInput = text;
    this.languageInput = language;
    console.log("got this as text input: " + this.textInput);
    console.log("got this as language input: " + this.languageInput);

    this.translatorService.translate(this.textInput,this.languageInput).subscribe(translation => this.translatedText = translation);
    console.log("recieved this as translation: " + this.translatedText);
  }

}
