import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost/opencart/upload/');
  await page.getByRole('link', { name: 'iPhone' }).first().click();
  await page.locator('#navbar-menu').getByRole('link', { name: 'Tablets' }).click();
  await page.getByText('Samsung Galaxy Tab 10.1', { exact: true }).click();
  await page.getByText('$241.99').click();
  await page.getByRole('tab', { name: 'Description' }).click();
  await page.locator('#tab-description').click();
  await page.getByRole('link', { name: 'Phones & PDAs' }).click();
  await page.getByRole('link', { name: 'HTC Touch HD' }).first().click();
  await page.getByText('$122.00').click();
  await page.getByRole('tab', { name: 'Description' }).click();
  await page.getByText('HTC Touch - in High').click();
  await page.getByRole('paragraph').filter({ hasText: 'Features' }).click();
  await page.getByText('Processor Qualcomm® MSM 7201A™ 528 MHz Windows Mobile® 6.1 Professional').click();
});