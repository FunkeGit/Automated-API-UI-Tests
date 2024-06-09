import{test, expect} from '@playwright/test'
let page;

test.beforeAll('Login',async({browser})=>{
    page=await browser.newPage();
    await page.goto('https://www.saucedemo.com/');//Launch Url
    await expect(page).toHaveURL('https://www.saucedemo.com/') //verify page URL
    await expect(page).toHaveTitle('Swag Labs'); //verify the title of login page

   // Login Page Validation with valid username and password
    const username= await page.locator('#user-name');
    await expect(username).toBeVisible();// Verify visibility of username input textbox
    await username.fill('standard_user');//input valid username
    const password=await page.locator('#password');
    await expect(password).toBeEmpty(); //verify password input textbox is empty
    await password.fill('secret_sauce');//input valid password value
    await page.locator('#login-button').click();
});

test('ProductPage', async()=>{
        
    //Verify products displayed are sorted by Name (A to Z)
    const links=await page.$$("//*[@class='inventory_item']");

    for(const link of links){
        const linktext=await link.textContent();
        console.log(linktext);
    }
});

test('ChangeProductSorting', async()=>{
    //Product sort to Name Z to A
    const sortIcon= await page.locator('.product_sort_container')
    await sortIcon.selectOption('Name (Z to A)') 

    //verify that items sorted Name : Z=>A are sorted correctly
    const products=await page.$$("//*[@class='inventory_item']")

    for(const product of products){
        const prodName=await product.textContent();
        console.log(prodName);

    }
});