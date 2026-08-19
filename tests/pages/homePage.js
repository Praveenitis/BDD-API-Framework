class HomePage {

    constructor(page) {
        this.page = page;
    }

    async open() {
        await this.page.goto('https://automationintesting.online/');
    }

    async getPageTitle() {
        return await this.page.title();
    }
}

module.exports = HomePage;