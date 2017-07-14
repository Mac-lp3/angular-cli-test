import { AnguTestPage } from './app.po';

describe('angu-test App', () => {
  let page: AnguTestPage;

  beforeEach(() => {
    page = new AnguTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
