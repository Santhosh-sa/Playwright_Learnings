import {test,expect} from '@playwright/test';

test('Alerts Handling', async({page})=>{

    await page.goto('https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo');

    page.on("dialog", async(AlertChecker)=>{
        const text = AlertChecker.message();
        console.log("Alert message is: "+text);
        //await AlertChecker.accept();
        await AlertChecker.dismiss();
    });

    await page.locator("//button[text()='Click Me']").nth(1).click();

    const  result = await page.locator("#confirm-demo").textContent();
    console.log("Result after alert handled: "+result);

});


test('Text Alert Handling', async({page})=>{

    await page.goto('https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo');

    page.on("dialog", async(AlertChecker)=>{
        const text = AlertChecker.defaultValue();
        console.log("Text Present in Alert: "+text);
        await AlertChecker.accept("HI Naveen!");
    });

    await page.locator("//button[text()='Click Me']").nth(2).click();
    const resultSet = await page.locator("#prompt-demo").textContent();
    await page.waitForTimeout(9000);
    console.log("Result after text alert handled: "+resultSet);
    
});