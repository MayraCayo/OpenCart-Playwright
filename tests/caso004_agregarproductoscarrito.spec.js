import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost/opencart/upload/');
  await page.getByRole('link', { name: 'iPhone' }).nth(1).click();
  await page.getByText('$123.20').click();
  await page.getByRole('button', { name: 'Add to Cart' }).click();
  await page.getByRole('link', { name: 'Tablets' }).click();
  await page.getByRole('link', { name: 'Samsung Galaxy Tab' }).first().click();
  await page.getByText('$241.99').click();
  await page.getByRole('button', { name: 'Add to Cart' }).click();
  await page.getByRole('link', { name: 'Cameras' }).click();
  await page.getByRole('link', { name: 'Nikon D300' }).first().click();
  await page.getByText('$98.00').click();
  await page.getByRole('button', { name: 'Add to Cart' }).click();
});