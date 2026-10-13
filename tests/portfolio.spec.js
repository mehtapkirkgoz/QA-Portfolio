const { test, expect } = require('@playwright/test');

test('portfolio homepage loads successfully', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle('Mehtap Kırkgöz | Junior QA Engineer');

  await expect(
    page.getByRole('heading', {
      name: /Testing software with/i
    })
  ).toBeVisible();
});


test('navbar links navigate to the correct sections', async ({ page }) => {
  await page.goto('/');

  await page.locator('.nav-links a[href="#about"]').click();
  await expect(page.locator('#about')).toBeInViewport();

  await page.locator('.nav-links a[href="#skills"]').click();
  await expect(page.locator('#skills')).toBeInViewport();

  await page.locator('.nav-links a[href="#projects"]').click();
  await expect(page.locator('#projects')).toBeInViewport();

  await page.locator('.nav-links a[href="#contact"]').click();
  await expect(page.locator('#contact')).toBeInViewport();
});