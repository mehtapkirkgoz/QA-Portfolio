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