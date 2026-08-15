const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

let credentials;
let response;
let responseBody;

Given('valid admin credentials', function () {

    credentials = {
        username: 'admin',
        password: 'password'
    };

});

When('I send an authentication request', async function () {

    response = await fetch('https://automationintesting.online/api/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    });

    responseBody = await response.text();

    console.log('Status:', response.status);
    console.log('Response:', responseBody);
});

Then('an authentication token should be generated', function () {

    assert.strictEqual(response.status, 200);

});