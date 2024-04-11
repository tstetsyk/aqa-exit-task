import { MainPage } from "./MainPage";

export class ExercisesPage extends MainPage {

    url = '';
    
    constructor(page) {
        super(page);
        
        this.tableBody = page.locator('table tbody')
        this.tableBodyRows = page.locator('tbody tr')
        this.tableCells = page.locator('tbody tr td')
        this.tableHeaderLabels = page.locator('tr th')
        this.editButton = page.getByRole('link', { name: 'edit' })
        this.deleteButton = page.getByRole('link', { name: 'delete' })
    }

    async deleteAllExercises() {
        while((await this.deleteButton.count()) > 0) {
            await this.deleteButton.first().click()
        }
    }
}