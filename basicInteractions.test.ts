import { expect, test } from "@playwright/test";

// Verify placeholder text of input field
test("Verify placeholder text of input field", async ({ page }) => {
    // Navigate to the target URL
    await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo");
    
    // Locate the message input field
    const messageInput = page.locator("//input[@id='user-message']");
    
    await messageInput.scrollIntoViewIfNeeded();
    // Log the placeholder attribute value
    console.log(await messageInput.getAttribute("placeholder"));
    
    // Verify the placeholder attribute value
    await expect(messageInput).toHaveAttribute("placeholder", "Please enter your Message");
    console.log("Before entering data: " + await messageInput.inputValue());
    await messageInput.type("hello");
    console.log("After entering data: " + await messageInput.inputValue());
    
});

// Summations
test("Sum", async ({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo");
    const num1Input = page.locator("//input[@id='sum1']");
    const num2Input = page.locator("//input[@id='sum2']");

    const getValuesBtn = page.locator("//button[contains(text(), 'Get Sum')]");
    // await num1Input.type("4");
    // await num2Input.type("5"); or,

    let num1 = 4;
    let num2 = 5;
    await num1Input.type("" + num1);
    await num2Input.type("" + num2);
    await getValuesBtn.click();
    const result = page.locator("#addmessage");
    console.log(await result.textContent());
    let expectedResult = num1 + num2;
    expect(result).toHaveText("" + expectedResult)
});


// checkbox
test("Checkbox", async({page})=> {
    await page.goto("https://test460.nop-station.com/en/");
    await page.waitForTimeout(3000);// to make the page wait for 3s or 3000ms 

    await page.click("//a[contains(text(), 'Log in')]"); // clicking on login link
    await page.waitForTimeout(3000);

    await page.fill("//input[@name='Email'] ", "jemmy123@gmail.com");
    await page.fill("//input[@name='Password'] ", "123456");
    await page.waitForTimeout(3000);
    const singleCheckbox = page.locator("//input[@type='checkbox' and @name='RememberMe'] ");
    expect(singleCheckbox).not.toBeChecked();
    await singleCheckbox.check();
    expect(singleCheckbox).toBeChecked();
    await page.click("//button[contains(text(),'Log in')] ");

    await page.waitForTimeout(5000);
})


