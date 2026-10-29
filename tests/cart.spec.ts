
/*
import {test, expect} from '@playwright/test';

test('Login + Add item to cart',async({page})=>{

await page.goto('https://www.saucedemo.com/');

await page.getByPlaceholder('Username').fill('standard_user');

await page.getByPlaceholder('Password').fill('secret_sauce');

await page.getByRole('button', { name: 'Login' }).click();


await expect(page).toHaveURL(/inventory/);

await page.locator('#add-to-cart-sauce-labs-backpack').click();

await expect(page.locator('.shopping_cart_badge')).toHaveText('1');

await page.locator('.shopping_cart_link').click();

await expect(page).toHaveURL(/cart/);

/*
const backpackItem= page.locator('.inventory_item_name');
await expect(backpackItem).toContainText('Sauce Labs Backpack');
*/
/*
const product = page
.locator('.inventory_item_name')
.filter({ hasText: 'Sauce Labs Backpack' });

})


/*
test('Add item to cart',async({page})=>{

await page.locator('#add-to-cart-sauce-labs-backpack').click();

await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
*/

import { test, expect } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/Inventorypage';


test('user can add Sauce Labs Backpack to cart', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');
  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page).toHaveURL(/inventory/);

  const product = page
    .locator('.inventory_item')
    .filter({ hasText: 'Sauce Labs Backpack' });

  await product
    .getByRole('button', { name: 'Add to cart' })
    .click();

  await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
  await page.locator('.shopping_cart_link').click();

  await expect(page).toHaveURL(/cart/);

  const cartItem = page
    .locator('.cart_item')
    .filter({ hasText: 'Sauce Labs Backpack' });

  await expect(cartItem).toBeVisible();
});


