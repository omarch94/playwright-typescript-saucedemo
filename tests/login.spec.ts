import {test, expect} from '@playwright/test';

import {LoginPage} from '../pages/LoginPage';

//using POM (Page Object Model) pattern to create a login page class and use it in the test

test('Login valid credentials',async({page})=>{
const loginPage=new LoginPage(page);


await loginPage.goto();


await loginPage.login(
    'standard_user',
    'secret_sauce'
);

await expect(page).toHaveURL(/inventory/);

});

/*

test('Login valid credentials',async({page})=>{

await page.goto('https://www.saucedemo.com/');

await page.getByPlaceholder('Username').fill('standard_user');

await page.getByPlaceholder('Password').fill('secret_sauce');

await page.getByRole('button', { name: 'Login' }).click();


await expect(page).toHaveURL(/inventory/);

})
*/

test('invalid credentials test',async({page})=>{

await page.goto('https://www.saucedemo.com/');

await page.getByPlaceholder('Username').fill('standard_user');

await page.getByPlaceholder('Password').fill('wrong');

await page.getByRole('button', { name: 'Login' }).click();


const errorMessage = await page.locator('[data-test="error"]');
await expect(errorMessage).toBeVisible();
await expect(errorMessage).toHaveText('Epic sadface: Username and password do not match any user in this service');

})


