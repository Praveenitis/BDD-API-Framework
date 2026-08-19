const { test, expect } = require('@playwright/test');
const HomePage = require('./pages/homePage');

test('Verify application homepage', async ({ page }) => {

    const homePage = new HomePage(page);

    await homePage.open();

    await expect(page).toHaveTitle("Restful-booker-platform demo");

});