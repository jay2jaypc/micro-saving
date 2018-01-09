import { MicroSavingsPage } from './app.po';

describe('micro-savings App', () => {
  let page: MicroSavingsPage;

  beforeEach(() => {
    page = new MicroSavingsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
