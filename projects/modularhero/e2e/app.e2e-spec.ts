import { ModularheroPage } from './app.po';

describe('modularhero App', () => {
  let page: ModularheroPage;

  beforeEach(() => {
    page = new ModularheroPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
