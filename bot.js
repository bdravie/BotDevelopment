const puppeteer = require('puppeteer');

const product_url = "https://www.footlocker.co.uk/en/product/nike-lebron-18-menshoes/314103114204.html";


async function givePage(){
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto(product_url)
    return page;
}

/*async function selectSize(page){
    await page.goto(product_url);
    await page.waitForSelector("label[for='ProductDetails_radio_size_46']");
    await page.click("label[for='ProductDetails_radio_size_46']", elem => elem.click())
    //if (page.click = true) { 
    await page.waitForNavigation();
    await page.waitFor(1000);
    //await page.waitForSelector("Button[class='Button ProductDetails-form__action']");
    await page.click("button[class='Button Button ProductDetails-form__action']", elem => elem.click());

    }*/


    async function selectSize2(page){
        await page.goto(product_url);
        await page.waitForSelector("label[for='ProductDetails_radio_size_46']");
        await page.click("label[for='ProductDetails_radio_size_46']", elem => elem.click())
        await page.waitForNavigation();
        await page.$eval("button[class='Button Button ProductDetails-form__action']", elem => elem.click());
        await page.waitForNavigation()
        .then
        await page.waitFor(2000);
        await page.evaluate(() => document.getElementsByClassName('Button Button ProductDetails-form__action')[0].click());
        await page.click("button[class='Button Button ProductDetails-form__action']", elem => elem.click());
    
        }
    //if ({page.click == true});
    //.then
    //await page.waitForNavigation();
    //await page.waitForSelector("button[class='Button Button ProductDetails-form__action']");
    //await page.click("button[class='Button Button ProductDetails-form__action']", elem => elem.click());


/*async function addToCart(page){
    await page.goto(product_url);
    await page.waitForSelector("label[for='ProductDetails_radio_size_45']");
    await page.click("label[for='ProductDetails_radio_size_45']");
    await page.waitForNavigation();
    await page.click("button[class='Button Button ProductDetails-form__action']", elem => elem.click());

}*/

async function checkout(){
    var page = await givePage();
    await selectSize2(page);
}


/*async function createPage(){
    var page = await givePage();
    await selectSize(page);
   //await addToCart(page);
    //console.log("done");
}*/

 //createPage();
 checkout();