import { test, expect } from '@playwright/test';

test('@unfollow', async ({ page }) => {
  const user = '';
  const password = '';
  await page.goto('https://www.threads.net/');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.getByPlaceholder('Username, phone or email').click();
  await page.getByPlaceholder('Username, phone or email').fill(user);
  await page.getByPlaceholder('Username, phone or email').press('Tab');
  await page.getByPlaceholder('Password').fill(password);
  await page.getByRole('button', { name: 'Log in', exact: true }).click();
  await page.getByRole('link', { name: 'Profile', exact: true }).click();
  await page.getByRole('button', { name: 'A Threads user\'s profile' }).click();
  await page.getByText(/Following[0-9]+$/i).click();

  await page.waitForTimeout(1000);

  const viewport = await page.viewportSize();
  const centerX = viewport.width / 2;
  const centerY = viewport.height / 2;

  await page.mouse.move(centerX, centerY);

  for (let i = 0; i < 10; i++) {
    await page.mouse.wheel(0, 500);
    await page.waitForTimeout(500);
  };

  const totalButtons = await page.getByText(/.*Following/).count();

  console.log('Total Unfollow: ', await totalButtons);

  for (let i = 0; i < totalButtons; i++) {
    await page.getByRole('button', { name: 'Following', exact: true }).nth(i+1).click();
    await page.waitForTimeout(500);
    await page.getByRole('button', { name: 'Unfollow' }).click();
    await page.waitForTimeout(500);

    await page.mouse.move(centerX, centerY);

    for (let i = 0; i < 5; i++) {
      await page.mouse.wheel(0, 500);
      await page.waitForTimeout(500);
    };
  }
});