import { Page,Locator } from "@playwright/test";

export class CartPage{

    readonly page:Page;
    readonly cartItems:Locator;

    readonly BtnCheckout:Locator;


    constructor(page:Page){

        this.page=page;
        this.cartItems=page.locator('.cart_item');
        this.BtnCheckout=page.getByRole('button',{name:"Checkout"})

    }

     getProduct(productName:string){
        const product=this.cartItems.filter({hasText:productName});

        return product;

    }

       
    async goToCheckout(){


        await this.BtnCheckout.click();

        await this.page.goto("https://www.saucedemo.com/checkout-step-one.html")


    }

}