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



test('GitHub and LinkedIn links have correct URLs', async ({ page }) => {
  await page.goto('/');

  const githubLinks = page.locator('a[href="https://github.com/mehtapkirkgoz"]');
  const linkedinLinks = page.locator(
    'a[href="https://www.linkedin.com/in/mehtapkirkgoz/"]'
  );

  await expect(githubLinks.first()).toBeVisible();
  await expect(linkedinLinks.first()).toBeVisible();

  await expect(githubLinks.first()).toHaveAttribute(
    'href',
    'https://github.com/mehtapkirkgoz'
  );

  await expect(linkedinLinks.first()).toHaveAttribute(
    'href',
    'https://www.linkedin.com/in/mehtapkirkgoz/'
  );

  await expect(githubLinks.first()).toHaveAttribute('target', '_blank');
  await expect(linkedinLinks.first()).toHaveAttribute('target', '_blank');
});