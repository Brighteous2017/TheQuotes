import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quotes-form-details',
  templateUrl: './quotes-form-details.component.html',
  styleUrls: ['./quotes-form-details.component.css']
})
export class QuotesFormDetailsComponent implements OnInit {
  quotesCount: number;
  newQuote: string = ""
  newAuthor: string = ""
  author = [];
  quotes = [];

  constructor() { }

  ngOnInit() {
  }
}
