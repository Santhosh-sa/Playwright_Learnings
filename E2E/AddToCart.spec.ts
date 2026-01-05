import { test, expect } from '@playwright/test';

test('Add To Cart Functionality', async({page})=>{
    await page.goto('https://www.saucedemo.com/');
/*
    // Login
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');*/
})