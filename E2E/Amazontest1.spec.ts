import { test, expect } from '@playwright/test';

test('AmazonTest1',async ({ page }) => {
  await page.goto('https://www.amazon.in/');
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).click();
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).click();
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).fill('Sam');
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).press('ArrowDown');
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).press('Enter');
  const page1Promise = page.waitForEvent('popup');
  await page.locator('.s-widget-container > span > .puis-card-container > div > div > .puisg-col.puisg-col-4-of-4.puisg-col-4-of-8.puisg-col-4-of-12.puisg-col-4-of-16.puisg-col-4-of-20.puisg-col-4-of-24.puis-list-col-left > .puisg-col-inner > .s-product-image-container > div > .rush-component > .a-link-normal').first().click();
  const page1 = await page1Promise;
  await page1.getByRole('link', { name: 'Add to Wish List' }).click();
});