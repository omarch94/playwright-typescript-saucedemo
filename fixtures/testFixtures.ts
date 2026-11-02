import { test as base, expect } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/Inventorypage';
import { CartPage } from '../pages/CartPage';
import {CheckoutPage} from '../pages/CheckoutPage';
import {CheckoutOverview} from '../pages/CHeckoutOverview';

//Define Fixtures

type MyFixtures = {
  loginPage: LoginPage;
  inventoryPage: InventoryPage;
  cartPage: CartPage;
  checkoutPage: CheckoutPage;
  checkoutOverview: CheckoutOverview;
};



export const test = base.extend<MyFixtures>({

    loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
},

    inventoryPage:async ({page}, use)=>{
    const inventoryPage = new InventoryPage(page);
    await use(inventoryPage); 
    },

    cartPage:async({page}, use)=>{

        const cartPage=new CartPage(page);
        await use(cartPage);
    },

    checkoutPage:async({page},use)=>{
        const checkoutPage=new CheckoutPage(page);
        await use(checkoutPage);
    },

    checkoutOverview:async({page},use)=>{
        const checkoutOverview=new CheckoutOverview(page);
        await use(checkoutOverview);

    }

})
export { expect } from '@playwright/test';