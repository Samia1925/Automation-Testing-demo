import { expect, test } from "@playwright/test";

test("handling alerts", async({page}) => {
    await page.goto("https://www.Lambdatest.com/selenium-playground/javascript-alert-box-demo");
    
    page.on("dialog", async (alert) => {
        // const text= alert.defaultValue();
        // await alert.accept();
        // const text= alert.message();
        // console.log(text);
        // await alert.dismiss(); // dismiss the alert without accepting

        const text= alert.defaultValue();
        console.log(text);
        await alert.accept("samia"); 
    })


})

test("handling modal alerts", async({page}) => {
    await page.goto("https://www.Lambdatest.com/selenium-playground/javascript-alert-box-demo");
    
    // modal alerts
    await page.locator("//button[@class='btn btn-dark mx-10 hover:bg-lambda-900 hover:border-lambda-900']").nth(1).click();
    // expect(page.locator("id=prompt-demo")).toContainText("Cancel!")
    expect(page.locator("id=prompt-demo")).toContainText("'samia'")

    await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-modal-demo");
    
    await page.click("//button[text()='Launch Modal'][1]");
    
    await page.click("//button[text()='Save Changes'][1]");

})
