import { test } from "@playwright/test";
import moment from "moment"; 
test("Calendar demo easy way- using fill function", async({page}) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo");
    let date="1998-11-01"

    await page.fill("id=birthday", date);
    await page.waitForTimeout(4000);
})

test("Calendar demo using moment", async({page}) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo");
    
    await page.click("//input[@placeholder= 'Start date']");

    await selectDate(12, "December 2024");
    await page.reload();

    await selectDate(12, "December 2025");

    await page.waitForTimeout(4000);
async function selectDate(date: number, dateToSelect: string){}
    const mmYY= page.locator("(//table[@class='table-condensed']//th[@class='datepicker-switch'])[1]")
    const prev= page.locator("(//table[@class='table-condensed']//th[@class='prev'])[1]")
    const next= page.locator("(//table[@class='table-condensed']//th[@class='next'])[1]")

    // let dateToSelect: string = "June 2024";

    const thisMonth = moment(dateToSelect, "MM YYYY").isBefore();
    console.log("this month? " + thisMonth);

    while (await mmYY.textContent() != dateToSelect){
        // if(thisMonth){
        //     await prev.click();
        // } else {
        //     await next.click();
        // }
        await prev.click();
    }

    await prev.click();
    await page.click("//td[@class='day'][text()='${date}']");

    await page.waitForTimeout(4000);
})
