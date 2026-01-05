
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.amazon.in/');
await page.getByRole('searchbox', { name: 'Search Amazon.in' }).click();
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).fill('Samsung s25 ultra');
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).press('Enter');
  await page.getByRole('button', { name: 'Go', exact: true }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Galaxy S25 Ultra 5G AI Smartphone (Titanium Whitesilver, 12GB RAM, 512GB Storage), 200MP Camera, S Pen Included, Long Battery Life', exact: true }).click();
  const page1  = await page1Promise;
  await page1.goto('https://www.amazon.in/Samsung-Smartphone-Whitesilver-Snapdragon-ProVisual/dp/B0DSKLSV63/ref=sr_1_3?crid=2Y8KAFVZ6ALHL&dib=eyJ2IjoiMSJ9.U0ZkjU5sXGbqL2q1_t9Gj5GZ09hu6ToeniNAcv4kU6VFhFE_9yF0igTatxXR9UWB4N7k6GeiwiTuuYbCR9zHD8369qiTC00WN9i58xETZUfbUhQqOt-bmDX7_Ev0W0SO7XPtp12MtTEMnn6XyPVjrpbnDj775bWRR8Ok2USoeHnU1HL2XJIRCz_hzC6ALbGrRL6SbxK3H_nGZG-mksejqsSbgwqJQ8u2-vRalzs6I0o.utCmmedTJWsV2Y9NhAkTUF4nX1wkHuBWsvEoJkfXlYQ&dib_tag=se&keywords=Samsung%2Bs25%2Bultra&qid=1767015932&sprefix=samsung%2Bs25%2Bultra%2Caps%2C387&sr=8-3&th=1');
  const page2Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Galaxy S25 Ultra 5G (Titanium' }).click();
  const page2 = await page2Promise;
 // await page2.getByText('1,08,940', { exact: true }).click();
  await page.getByRole('link', { name: 'Amazon.in' }).click();
});

test('AmazonTest1',async ({ page }) => {
  await page.goto('https://www.amazon.in/');
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).click();
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).fill('Sam');
});

test('Interact with tabs', async ({ page }) => {
  await page.goto('https://www.lambdatest.com/selenium-playground/window-popup-modal-demo');

  const [newWindow] =await Promise.all ([
    page.waitForEvent('popup'),
    page.click("'Follow On Twitter'")
  ])
  console.log('New window URL:', (await newWindow).url());
});