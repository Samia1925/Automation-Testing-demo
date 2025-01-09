import { expect, test } from "@playwright/test";

//  single dropdown option choose

test.only("single dropdown", async ({ page }) => {
    await page.goto("https://test460.nop-station.com/en/");
    await page.waitForTimeout(3000);// to make the page wait for 3s or 3000ms 

    await page.click("//a[contains(text(), 'Register')]"); // clicking on login link
    await page.waitForTimeout(3000);

    await page.selectOption("//select[@name='DateOfBirthDay']", {
        label: '4'
    });

})

// multiple dropdwon option choose
test("dropdown", async ({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/select-dropdown-demo");
    await page.waitForTimeout(5000);
    await page.selectOption("//select[@id='multi-select']", [{
        label: "Texas"
    }, {
        index: 1
    }, {
        value: "New Jersey"
    }
    ]);
    await page.waitForTimeout(5000);
})

// bootstrao dropdown
test("Bootstrap dropdown", async ({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/jquery-dropdown-search-demo");
    await page.click('#country+span');
    await page.locator("ul#select2-country-results", {
        has: page.locator("li", {
            hasText: "United States"
    })
}).click

await page.waitForTimeout(5000)
})
