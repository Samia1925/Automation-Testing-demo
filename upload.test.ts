import {test} from "@playwright/test";

test("upload a file", async({page}) => {

    await page.goto("https://blueimp.github.io/jQuery-File-Upload/");
    await page.setInputFiles("//input[@type='file']", ["uploaded files/arong_dress.jpg","uploaded files/apple_watch_fitness.jpg", "uploaded files/Lambdainfo.txt" ]);

    await page.waitForTimeout(3000)
    
})

test.only("upload a file by clicking add files", async({page}) => {

    await page.goto("https://blueimp.github.io/jQuery-File-Upload/");

    const [uploadFiles] = await Promise.all([
        page.waitForEvent("filechooser"),
        page.click("//input[@type='file']")
    ])
    const isMultiple = uploadFiles.isMultiple();
    console.log(isMultiple);
    uploadFiles.setFiles(["uploaded files/arong_dress.jpg","uploaded files/apple_watch_fitness.jpg"] );

    await page.waitForTimeout(3000)
    
})
