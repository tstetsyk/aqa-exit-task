import { MainPage } from "./MainPage";
import { faker } from '@faker-js/faker';
const { getDaySuffix } = require('../utils');

export class CreateExercisePage extends MainPage {
    
    url = '/create';

    constructor(page) {
        super(page)

        this.userNameLabel = page.getByText('Username')
        this.userNameDropDown = page.getByRole('combobox')
        this.userNameDropDownOptions = page.locator('select option')
        this.descriptionLabel = page.getByText('Description:')
        this.descriptionInputField = page.locator('form div')
                                              .filter({ hasText: 'Description:' })
                                              .getByRole('textbox')
        this.durationLabel = page.getByText('Duration (in minutes):')
        this.durationInputField = page.locator('form div')
                                           .filter({ hasText: 'Duration (in minutes):' })
                                           .getByRole('textbox')
        this.dateLabel = page.getByText('Date:')
        this.datepicker = page.locator('.react-datepicker__input-container input')
        this.currentDate = page.locator('.react-datepicker__day[aria-current="date"]')
        this.createExerciseButton = page.getByRole('button', { name: 'Create Exercise Log' })
    }

    async selectDateFromDatepicker(numOfDaysFromCurrentDate) {
        await this.datepicker.click()

        const date = new Date()
        
        if(numOfDaysFromCurrentDate) {
            date.setDate(date.getDate() + numOfDaysFromCurrentDate)
        }
        
        const currentWeekDay = date.toLocaleString('En-US', {weekday: 'long'})
        const currentDate = date.getDate()
        const currentMonth = date.toLocaleString('En-US', {month: "long"})
        const currentYear = date.getFullYear()
        const dateToSelect = `Choose ${currentWeekDay}, ${currentMonth} ${currentDate + getDaySuffix(currentDate)}, ${currentYear}`
        let calendarDate = this.page.locator(`.react-datepicker__day[aria-label="${dateToSelect}"]`)
        await calendarDate.click()
    }

    async createNewExercise() {
        await this.userNameDropDown.selectOption({ index: 1 })
        await this.descriptionInputField.fill(faker.lorem.sentence())
        await this.durationInputField.fill(`${faker.number.int({ min: 1, max: 60 })}`)
        await this.selectDateFromDatepicker()
        await this.createExerciseButton.click()
    }

}