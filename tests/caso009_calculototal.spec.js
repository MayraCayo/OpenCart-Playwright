import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost/opencart/upload/');
  await page.getByRole('link', { name: 'Components', exact: true }).click();
  await page.getByRole('link', { name: 'Monitors (2)' }).click();
  await page.getByRole('link', { name: 'Samsung SyncMaster 941BW' }).first().click();
  await page.getByRole('button', { name: 'Add to Cart' }).click();
  await page.getByRole('button', { name: ' 1 item(s) - $' }).click();
  await page.getByRole('link', { name: ' View Cart' }).click();
  await page.getByRole('cell', { name: 'Samsung SyncMaster 941BW -' }).click();
  await page.getByRole('cell', { name: '$242.00' }).first().click();
  await page.locator('input[name="quantity"]').click();
  await page.locator('input[name="quantity"]').fill('3');
  await page.getByRole('button', { name: 'Update' }).click();
  await page.getByRole('cell', { name: '$722.00' }).click();
});