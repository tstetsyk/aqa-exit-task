import { CreateExercisePage } from "./CreateExercisePage";
const { editExerciseData } = require('../test-data/testData')

export class EditExercisePage extends CreateExercisePage {
    
    url = '/edit/';

    constructor(page) {
        super(page)

        this.editExerciseButton = page.locator('input[data-ta="editExerciseFormSubmit"]')
    }

    async editExercise() {
      await this.userNameDropDown.selectOption(editExerciseData.username)
      await this.descriptionInputField.fill(editExerciseData.description)
      await this.durationInputField.fill(editExerciseData.duration)
      await this.selectDateFromDatepicker(1)
      await this.editExerciseButton.click()
    }

}