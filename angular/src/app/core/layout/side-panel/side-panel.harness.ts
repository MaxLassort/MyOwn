import { ComponentHarness, HarnessPredicate } from '@angular/cdk/testing';

export class SidePanelHarness extends ComponentHarness {
  static hostSelector = 'app-side-panel';


  private getToggleButton = this.locatorFor('[data-testid="toggle-button"]');
  private getPanel = this.locatorFor('[data-testid="side-panel"]');
  private getContentArea = this.locatorFor('[data-testid="content-area"]');

  async isOpen(): Promise<boolean> {
    const panel = await this.getPanel();
    return panel.hasClass('w-64');
  }

  async isClosed(): Promise<boolean> {
    return !(await this.isOpen());
  }

  async toggle(): Promise<void> {
    const button = await this.getToggleButton();
    await button.click();
  }

  async open(): Promise<void> {
    if (await this.isClosed()) {
      await this.toggle();
    }
  }

  async close(): Promise<void> {
    if (await this.isOpen()) {
      await this.toggle();
    }
  }

}
