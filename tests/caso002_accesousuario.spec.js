import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8080/');
  await page.getByRole('link', { name: ' My Account ' }).click();
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByRole('textbox', { name: 'E-Mail Address' }).click();
  await page.getByRole('textbox', { name: 'E-Mail Address' }).fill('correa');
  await page.getByRole('textbox', { name: 'E-Mail Address' }).press('Alt+6');
  await page.getByRole('textbox', { name: 'E-Mail Address' }).press('Alt+4');
  await page.getByRole('textbox', { name: 'E-Mail Address' }).fill('correa@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('123456');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.locator('h1').click();
});
