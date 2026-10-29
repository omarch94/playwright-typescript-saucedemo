import{Page,Locator, expect} from '@playwright/test';

export class CheckoutPage {

    readonly page:Page;
    readonly headerCheckout:Locator;
    readonly firsName:Locator;
    readonly lastName:Locator;
    readonly postalCode:Locator;

    readonly cancelBtn:Locator;
    readonly continueBtn:Locator;


    constructor(page:Page){

        this.page=page;
        this.headerCheckout=page.locator('.title')
        this.firsName=page.getByPlaceholder('First Name');
        this.lastName=page.getByPlaceholder('Last Name');
        this.postalCode=page.getByPlaceholder('Zip/Postal Code');
        this.cancelBtn=page.getByRole('button',{name:'Cancel'});
        this.continueBtn=page.getByRole('button',{name:'Continue'});

    }

    

    async fillCustomerInformation(firstName:string,lastName:string,postalCode:string){

        await this.firsName.fill(firstName);
        await this.lastName.fill(lastName);
        await this.postalCode.fill(postalCode);

    }

    async continue(){

     // await  expect(this.continueBtn).toBeVisible();

       await this.continueBtn.click();
    }
    async cancel(){

    await    this.cancelBtn.click();
    }

}