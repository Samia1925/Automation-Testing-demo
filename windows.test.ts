import { Expect, test } from "@playwright/test";

test("interact with single window", async ({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/window-popup-modal-demo");

    console.log(page.url());
    const [newWindow] = await Promise.all([
        page.waitForEvent("popup"),
        page.click("'Follow On Twitter'")
    ]);

    console.log(newWindow.url());

})


test("interact with multiple windows", async ({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/window-popup-modal-demo");

    console.log(page.url());
    const [multiPage] = await Promise.all([
        page.waitForEvent("popup"),
        page.click("#followboth")
    ]);

    await multiPage.waitForLoadState();
    const pages = multiPage.context(). pages();
    console.log('No of tabs: '+ pages.length);

    pages.forEach(tab => {
        console.log(tab.url());
    })

    let feacebookPage: Page;
    for (let index = 0; index < pages.length; index++) {
        const url = pages[index].url();
        if(url == "https://www.facebook.com/Lamdatest/"){
            feacebookPage = pages[index];
        }
        
    }

    const text = await feacebookPage.textContent("//h1");
    console.log(text);
    

})
