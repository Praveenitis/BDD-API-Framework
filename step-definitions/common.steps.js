const { Given } = require('@cucumber/cucumber');

const AuthService = require('../api/authService');

Given('I am authenticated as an admin', async function () {

    //this.authService = new AuthService();

    await this.authService.login({
        username: 'admin',
        password: 'password'
    });

});