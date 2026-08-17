const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

const AuthService = require('../api/authService');

let credentials;
let response;

const authService = new AuthService();

Given('valid admin credentials', function () {

    credentials = {
        username: 'admin',
        password: 'password'
    };

});

When(
    'I send an authentication request',
    { timeout: 15000 },
    async function () {

        response = await authService.login(credentials);

        console.log('Status:', response.status);
        console.log('Response:', response.body);

    }
);

Then('an authentication token should be generated', function () {

    assert.strictEqual(response.status, 200);

    assert.ok(authService.getToken());

});