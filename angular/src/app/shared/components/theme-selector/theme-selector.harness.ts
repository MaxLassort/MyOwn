import { ComponentHarness } from '@angular/cdk/testing';

export class ThemeSelectorHarness extends ComponentHarness {
  static hostSelector = 'app-theme-selector';

  protected getButton = this.locatorFor('button');
  protected getIcon = this.locatorFor('span.material-symbols-outlined');

  /**
   * Clicks the theme toggle button.
   */
  async toggleTheme(): Promise<void> {
    const button = await this.getButton();
    await button.click();
  }

  /**
   * Gets the name of the currently displayed icon (e.g., 'dark_mode' or 'light_mode').
   */
  async getIconName(): Promise<string> {
    const icon = await this.getIcon();
    return (await icon.text()).trim();
  }
}
