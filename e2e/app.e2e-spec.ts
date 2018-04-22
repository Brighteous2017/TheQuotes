import { TheQuotesPage } from './app.po';

describe('the-quotes App', () => {
  let page: TheQuotesPage;

  beforeEach(() => {
    page = new TheQuotesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
