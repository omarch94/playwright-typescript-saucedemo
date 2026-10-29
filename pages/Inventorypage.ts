import {Page,Locator} from '@playwright/test';



export class InventoryPage{

    readonly page:Page;

    readonly products:Locator;
    readonly cartBadge:Locator;
    readonly cartLink:Locator;

    constructor(page:Page){
        this.page=page;

        this.products=page.locator('.inventory_item');
        this.cartBadge=page.locator('.shopping_cart_badge');
        this.cartLink=page.locator('.shopping_cart_link');

        

    }

    async addProductToCart(productname:string){

        const product= this.products.filter({hasText:productname});

        await product
        .getByRole('button',{name:'Add to cart'})
        .click();
    }

    async open(){
        await this.cartLink.click();
    }


}