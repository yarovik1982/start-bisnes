import { test, expect } from '@playwright/test';

test.describe('Mobile menu', () => {
  test('toggle works after client-side navigation', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });

    await page.goto('/');

    const toggle = page.locator('#menu-toggle');
    const menu = page.locator('#mobile-menu');

    await expect(toggle).toBeVisible();

    await toggle.click();
    await expect(menu).toBeVisible();

    // Navigate via the mobile menu to keep it a client-side transition.
    await page.locator('#mobile-menu a[href="/about"]').click();
    await page.waitForURL('**/about');

    // The persisted header should still be interactive.
    await toggle.click();
    await expect(menu).toBeVisible();
  });
});

