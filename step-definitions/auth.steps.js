const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');
const environment = require('../config/environment');


Given('valid admin credentials', function () {

    this.credentials = environment.adminCredentials;

});


When(
    'I send an authentication request',
    { timeout: 15000 },
    async function () {

        this.response = await this.authService.login(
            this.credentials
        );

        

    }
);


Then('an authentication token should be generated', function () {

    assert.strictEqual(this.response.status, 200);

    assert.ok(this.authService.getToken());

});