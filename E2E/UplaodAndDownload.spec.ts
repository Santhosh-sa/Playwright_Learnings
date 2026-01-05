import {test} from '@playwright/test';

test('File Download', async({page}) => {
    await page.goto('https://www.lambdatest.com/selenium-playground/generate-file-to-download-demo');

    await page.type('#textbox','File Download using Playwright 2');
    await page.click('#create');

    const download= await Promise.all([
        page.waitForEvent('download'),
        page.click('#link-to-download')
    ])

   /* const path = await download[0].path();
    console.log('Downloaded file path: '+path); */
    const suggestedFilename = download[0].suggestedFilename();
    
    await download[0].saveAs(suggestedFilename);
    console.log('File downloaded with name: '+suggestedFilename);

})