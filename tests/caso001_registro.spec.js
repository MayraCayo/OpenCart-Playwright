import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost/opencart/upload/');
  await page.getByRole('link', { name: ' My Account ' }).click();
  await page.getByRole('link', { name: 'Register' }).click();
  await page.getByRole('heading', { name: 'Register Account' }).click();
  await page.getByRole('textbox', { name: '* First Name' }).click();
  await page.getByRole('textbox', { name: '* First Name' }).press('CapsLock');
  await page.getByRole('textbox', { name: '* First Name' }).fill('M');
  await page.getByRole('textbox', { name: '* First Name' }).press('CapsLock');
  await page.getByRole('textbox', { name: '* First Name' }).fill('Maria');
  await page.getByRole('textbox', { name: '* Last Name' }).click();
  await page.getByRole('textbox', { name: '* Last Name' }).press('CapsLock');
  await page.getByRole('textbox', { name: '* Last Name' }).fill('C');
  await page.getByRole('textbox', { name: '* Last Name' }).press('CapsLock');
  await page.getByRole('textbox', { name: '* Last Name' }).fill('Correa');
  await page.getByRole('textbox', { name: '* E-Mail' }).click();
  await page.getByRole('textbox', { name: '* E-Mail' }).fill('correa');
  await page.getByRole('textbox', { name: '* E-Mail' }).press('Alt+6');
  await page.getByRole('textbox', { name: '* E-Mail' }).press('Alt+4');
  await page.getByRole('textbox', { name: '* E-Mail' }).fill('correa@gmail.com');
  await page.getByRole('textbox', { name: '* Password' }).click();
  await page.getByRole('textbox', { name: '* Password' }).fill('123456');
  await page.locator('input[name="agree"]').check();
  await page.getByRole('button', { name: 'Continue' }).click();
});
