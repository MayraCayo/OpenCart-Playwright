import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8080/');
  await page.getByRole('link', { name: 'Phones & PDAs' }).click();
  await page.getByRole('link', { name: 'Palm Treo Pro' }).first().click();
  await page.getByRole('button', { name: 'Add to Cart' }).click();
  await page.getByRole('link', { name: 'Tablets' }).click();
  await page.getByRole('link', { name: 'Samsung Galaxy Tab' }).first().click();
  await page.getByRole('button', { name: 'Add to Cart' }).click();
  await page.getByRole('link', { name: 'Cameras' }).click();
  await page.getByRole('link', { name: 'Nikon D300' }).first().click();
  await page.getByRole('button', { name: 'Add to Cart' }).click();
  await page.getByRole('button', { name: ' 3 item(s) - $' }).click();
  await page.getByRole('link', { name: ' View Cart' }).click();
  await page.getByText('Products marked with *** are').click();
  await page.getByRole('cell', { name: 'Samsung Galaxy Tab 10.1 *** - Model: SAM1 - Reward Points:' }).click();
});
