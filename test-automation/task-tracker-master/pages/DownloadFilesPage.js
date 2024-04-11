import { MainPage } from "./MainPage";

export class DownloadFilesPage extends MainPage {
    
    url = '/downloadfiles';

    constructor(page) {
        super(page)

        this.downloadUsersButton = page.getByRole('button', { name: 'Download Users' })
    }
}