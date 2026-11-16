import {test,expect} from "../fixtures/testFixtures";


test(
  'user can add backpack to cart',
  async ({ page, inventoryPage }) => {
    await inventoryPage.goto();

    await expect(page).toHaveURL(/inventory/);

    await inventoryPage.addProductToCart(
      'Sauce Labs Backpack'
    );

    await expect(
      inventoryPage.cartBadge
    ).toHaveText('1');
  }
);

test ('user can add Bike Light to cart', async({page,inventoryPage})=>
{
  await inventoryPage.goto();

    await expect(page).toHaveURL(/inventory/);

    await inventoryPage.addProductToCart("Sauce Labs Bike Light");
    await expect(inventoryPage.cartBadge).toHaveText('1');      
} );