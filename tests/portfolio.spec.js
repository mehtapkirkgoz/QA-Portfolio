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


test('project cards contain correct GitHub repository links', async ({ page }) => {
  await page.goto('/');

  const projectLinks = [
    'https://github.com/mehtapkirkgoz/manual-testing-ecommerce',
    'https://github.com/mehtapkirkgoz/api-testing-postman',
    'https://github.com/mehtapkirkgoz/sql-for-qa',
    'https://github.com/mehtapkirkgoz/qa-e2e-case-study',
    'https://github.com/mehtapkirkgoz/ui-automation-playwright'
  ];

  for (const url of projectLinks) {
    const link = page.locator(`a[href="${url}"]`);

    await expect(link).toBeVisible();
    await expect(link).toHaveAttribute('target', '_blank');
  }
});


test('CV can be downloaded', async ({ page }) => {
  await page.goto('/');

  const cvButton = page.getByRole('link', { name: 'Download CV' });

  await expect(cvButton).toBeVisible();
  await expect(cvButton).toHaveAttribute(
    'href',
    'assets/Mehtap-Kirkgoz-CV.pdf'
  );
  await expect(cvButton).toHaveAttribute('download', '');

  const downloadPromise = page.waitForEvent('download');

  await cvButton.click();

  const download = await downloadPromise;

  expect(download.suggestedFilename()).toBe('Mehtap-Kirkgoz-CV.pdf');
});



test('portfolio displays correctly on mobile', async ({ page }) => {
  await page.setViewportSize({
    width: 375,
    height: 812
  });

  await page.goto('/');

  await expect(
    page.getByRole('heading', { name: /Testing software with/i })
  ).toBeVisible();

  await expect(page.locator('.nav-links')).toBeVisible();
  await expect(page.locator('#skills')).toBeVisible();
  await expect(page.locator('#projects')).toBeVisible();
  await expect(page.locator('#contact')).toBeVisible();

  const hasHorizontalOverflow = await page.evaluate(() => {
    return document.documentElement.scrollWidth > window.innerWidth;
  });

  expect(hasHorizontalOverflow).toBe(false);
});


test('contact email link is correct', async ({ page }) => {
  await page.goto('/');

  const emailLink = page.getByRole('link', { name: 'Email Me' });

  await expect(emailLink).toBeVisible();

  await expect(emailLink).toHaveAttribute(
    'href',
    'mailto:mhtpkrkgz22@gmail.com'
  );
});