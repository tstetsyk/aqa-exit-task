import { MainPage } from "./MainPage";

export class CreateUserPage extends MainPage {
    
    url = '/user';

    constructor(page) {
        super(page)
        
        this.userNameInputField = page.getByRole('textbox')
        this.userNameLabel = page.locator('label')
        this.createUserButton = page.getByRole('button')
    }

    async createNewUser(userName) {
      await this.userNameInputField.fill(userName)
      await this.createUserButton.click()
    }

    async getUserWasAddedText(userName) { 
        return this.page.getByText(`User ${userName} was added!`) 
    }
}