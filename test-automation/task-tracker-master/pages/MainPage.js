export class MainPage {

    url = '';
    
    constructor(page) {
        this.page = page;
        
        this.mainHeading = page.getByRole('heading')
        this.navigationMenuItems = page.getByRole('listitem')
    }

    async getUrl() { return this.page.url() }

    async navigate() { await this.page.goto(this.url) }
}