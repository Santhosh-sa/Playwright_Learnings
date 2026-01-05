import {expect, test} from "@playwright/test";

test("Login Demo", async ({page}) =>{
  
    await page.goto("https://www.google.com/");

    await expect(page).toHaveTitle('Google');

    var title = await page.title();
    console.log("Title is: " + title);

    expect(title).toBe("Google");

    var bar =await page.locator("//textarea[@role='combobox']");

    await bar.hover();
    await bar.fill("Amazon");
    await page.keyboard.press("Enter");
}
 );  