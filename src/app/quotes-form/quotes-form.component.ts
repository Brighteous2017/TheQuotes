import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quotes-form',
  templateUrl: './quotes-form.component.html',
  styleUrls: ['./quotes-form.component.css']
})

export class QuotesFormComponent implements OnInit {

  quotesCount: number;
  newQuote: string = ""
  newAuthor: string = ""
  author = [];
  quotes = [];

  constructor() { }

  ngOnInit() {
    this.quotesCount=this.quotes.length;

  }

  addQuote (){
    this.quotes.push(this.newQuote);
    this.newQuote="";
    this.quotesCount=this.quotes.length;

  }

  addAuthor (){
    this.author.push(this.newAuthor);
    this.newAuthor=""
  }
}
