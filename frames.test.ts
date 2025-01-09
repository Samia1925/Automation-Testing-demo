import { expect, Expect, test } from "@playwright/test";

test("interaction with frames", async ({page}) => {
    await page.goto("https://letcode.in/frame");
    const allframes = page.frames();
    console.log("No of frames: " + allframes.length);

    const myFrame = page.frame("firstFr");
    await myFrame?.fill("//input[@name='fname']", "samia") // ? refers to optional chaining its like if(myFrame!=null){myFrame.fill("", "")}
    await myFrame?.fill("//input[@name='lname']", "jahan")

    expect(await myFrame?.locator("p.has-text-info").textContent()).toContain("You have entered")
    

    await page.waitForTimeout(3000);
})

test("interaction with frames in different way", async ({page}) => {
    await page.goto("https://letcode.in/frame");
    const allframes = page.frames();
    console.log("No of frames: " + allframes.length);

    const frame = page.frameLocator("//iframe[@name='firstFr']")
    await frame.locator("//input[@name='fname']").fill("samia");
    await frame.locator("//input[@name='lname' ]").fill("jahan");

    await page.waitForTimeout(3000);
})


test("nested frames", async ({page}) => {
    await page.goto("https://letcode.in/frame");
    const allframes = page.frames();
    console.log("No of frames: " + allframes.length);

    const frame = page.frameLocator("//iframe[@name='firstFr']")
    await frame.locator("//input[@name='fname']").fill("samia");
    await frame.locator("//input[@name='lname' ]").fill("jahan");

    const innerframe = frame.frameLocator("//iframe[@src='innerFrame']")
    await innerframe.locator("//input[@name='email']").fill("sam123@gmail.com")

    await page.waitForTimeout(3000);
})
