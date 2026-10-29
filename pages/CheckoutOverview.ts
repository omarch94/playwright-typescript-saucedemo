import { Page,Locator } from "@playwright/test";

export class CheckoutOverview {

    readonly page:Page;
    readonly checkOutOverviewTitle:Locator;
    readonly products:Locator;
    readonly finishButton:Locator;


    constructor(page:Page){
        this.page=page;

        this.checkOutOverviewTitle=page.locator('.title');

        this.products=page.locator('.cart_item');

        this.finishButton=page.getByRole('button',{name:'Finish'});
    }
/*
    async getProducts(productsName:string){

        this.products.forEach(productsName => {
            this.products
        });


    }
        */

    //we dont use async because we return a Locator

     getProduct(productName:string){
       return  this.products.filter({hasText:productName});
    }
    async finishOrder(){

      await  this.finishButton.click()
    }

}