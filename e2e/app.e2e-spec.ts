import { Ang2CLIPage } from './app.po';

describe('ang2-cli App', function() {
  let page: Ang2CLIPage;

  beforeEach(() => {
    page = new Ang2CLIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
