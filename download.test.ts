import {test} from "@playwright/test";

test("download a file", async({page}) => {

    await page.goto("https://www.lambdatest.com/selenium-playground/generate-file-to-download-demo");
    await page.type("//textarea[@id='textbox']", "hello world");

    await page.click("//button[@id='create']");
    await page.click("//a[@id='link-to-download']");

    const download = await Promise.all([
        page.waitForEvent("download"),
        page.click("//a[@id='link-to-download']")
    ])
    // const path = await download[0].path();
    // console.log(path);

    const fileName= download[0].suggestedFilename();
    await download[0].saveAs(fileName);
})
