import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://app.thetestingacademy.com/playwright/ttacart/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('aishwjs');
  await page.locator('[data-test="login-button"]').click();
  await page.locator('[data-test="login-button"]').click();
  await expect(page.locator('[data-test="error"]')).toBeVisible();
});



//valid credencials
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://app.thetestingacademy.com/playwright/ttacart/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('aishwarya');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('patilaishwarya9168@gmail.com');
  await page.locator('#login-form').click();
  await page.locator('[data-test="password"]').fill('Aishwarya2123');
  await page.locator('[data-test="login-button"]').click();
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="login-container"]').click();
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('Aishwarya@123');
  await page.locator('[data-test="password"]').press('Enter');
  await page.locator('[data-test="login-button"]').click();
  await page.locator('[data-test="login-button"]').click();
  await page.locator('[data-test="login-password"]').click();
  await page.locator('[data-test="login-password"]').click();
  await page.locator('[data-test="login-credentials"]').click();
  await page.locator('[data-test="login-credentials"]').click();
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('Aishwarya@123tta_');
  await page.locator('[data-test="password"]').press('ControlOrMeta+a');
  await page.locator('[data-test="password"]').fill('tta_secret');
  await page.locator('[data-test="password"]').press('Enter');
  await page.locator('[data-test="login-button"]').click();
});