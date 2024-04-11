import { MainPage } from "./MainPage";

export class FileUploadPage extends MainPage {
    
    url = '/uploadfiles';

    constructor(page) {
        super(page)

        this.uploadFileInputField = page.locator('#upload')
        this.uploadFileButton = page.getByRole('button', { name: 'Upload File' })
        this.tableHeader = page.locator('table thead')
        this.tableHeaderLabels = page.locator('tr th')
        this.tableBodyRows = page.locator('tbody tr')
        this.tableBodyCells = page.locator('tbody tr td')
        this.deleteButton = page.getByRole('link', { name: 'delete' })
    }
}