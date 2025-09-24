import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost/opencart/upload/');
  await page.getByRole('link', { name: ' My Account ' }).click();
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByRole('textbox', { name: 'E-Mail Address' }).click();
  await page.getByRole('textbox', { name: 'E-Mail Address' }).fill('prueba123');
  await page.getByRole('textbox', { name: 'E-Mail Address' }).press('Alt+6');
  await page.getByRole('textbox', { name: 'E-Mail Address' }).press('Alt+4');
  await page.getByRole('textbox', { name: 'E-Mail Address' }).fill('prueba123@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('56874');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByText('Warning: No match for E-Mail').click();
  await page.getByRole('textbox', { name: 'E-Mail Address' }).click();
  await page.getByRole('textbox', { name: 'E-Mail Address' }).fill('prueba123');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('568745');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByText('Password Forgotten Password').click();
});