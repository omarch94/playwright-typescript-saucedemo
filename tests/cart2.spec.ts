import { test,expect } from "@playwright/test";
import { LoginPage} from "../pages/LoginPage";
import { InventoryPage } from "../pages/Inventorypage";
import { CartPage } from "../pages/CartPage";
import { CheckoutPage } from "../pages/CheckoutPage";
import { CheckoutOverview } from "../pages/CHeckoutOverview";

test("Test Cart  with POM", async({page})=>{

    const loginPage=new LoginPage(page);
    const inventoryPage=new InventoryPage(page);
    const cartPage=new CartPage(page);
    const checkoutPage=new CheckoutPage(page);

    const checkOutOverview=new CheckoutOverview(page);
    
    await loginPage.goto();
    
    
    await loginPage.login(
        'standard_user',
        'secret_sauce'
    );
    
    await expect(page).toHaveURL(/inventory/);


    await inventoryPage.addProductToCart("Sauce Labs Backpack");
    await inventoryPage.addProductToCart("Sauce Labs Bike Light");

    await expect(inventoryPage.cartBadge).toHaveText('2');

    await inventoryPage.open();

    await expect(page).toHaveURL(/cart/)

    const backpack = cartPage.getProduct("Sauce Labs Backpack");
    const bikeLight = cartPage.getProduct("Sauce Labs Bike Light");

    await expect(backpack).toBeVisible();
    await expect(bikeLight).toBeVisible();
    await cartPage.goToCheckout();

    await expect(page).toHaveURL(/checkout-step-one/);

    await expect(
    checkoutPage.
    headerCheckout)
    .toHaveText('Checkout: Your Information');

    await checkoutPage.fillCustomerInformation('test','test2','93000');

    await checkoutPage.continue();

    await expect(page).toHaveURL(/checkout-step-two/);
    
    const overviewBackpack= checkOutOverview.getProduct('Sauce Labs Backpack');
    const overviewBikeLight= checkOutOverview.getProduct("Sauce Labs Bike Light");
    await expect(overviewBackpack).toBeVisible();
    await expect(overviewBikeLight).toBeVisible();  

 await checkOutOverview.finishOrder();
 await expect(page).toHaveURL(/checkout-complete/);

 await expect(page.getByRole('heading',{name: 'Thank you for your order!'})).toBeVisible();

})