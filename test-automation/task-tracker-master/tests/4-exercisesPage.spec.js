const { expect } = require('@playwright/test');
const { test } = require('../fixture');
const { regexes, editExerciseData } = require('../test-data/testData');


test.describe('Exercises Page', async () => {
    test.beforeEach(async ({ exercisesPage, createExercisePage }) => {
      let numOfCreatedExercises = await exercisesPage.tableBodyRows.count()

      if(numOfCreatedExercises < 1) {
        await createExercisePage.navigate()
        await createExercisePage.createNewExercise()
        await exercisesPage.navigate()
      } else {
        await exercisesPage.navigate()
      }
    });

    test('Check page title', async ({ exercisesPage }) => {
      await expect(exercisesPage.mainHeading).toContainText('Logged Exercises');
    });

    test('Check table header labels', async ({ exercisesPage }) => {
      expect(await exercisesPage.tableHeaderLabels.allTextContents()).toEqual(expect.arrayContaining(['Username', 'Description', 'Duration', 'Date', 'Actions']))
    });

    test('Check table row cells data format', async ({ exercisesPage }) => {
      for (let i = 0; i < 5; i++) {
        let cellValuesArray = await exercisesPage.tableCells.allTextContents()
        expect(cellValuesArray[i]).toMatch(regexes[i])
      }
    });

    test('Verify "edit" action', async ({ page, createUserPage, exercisesPage, editExercisePage }) => {
      await exercisesPage.editButton.first().click()

      if(!(await editExercisePage.userNameDropDownOptions.allTextContents()).includes('Updated User')) {
        await createUserPage.navigate()
        await createUserPage.createNewUser('Updated User')
        await exercisesPage.navigate()
        await exercisesPage.editButton.first().click()
      }

      expect(await editExercisePage.getUrl()).toMatch(/.*edit/);
      await expect(editExercisePage.mainHeading).toContainText('Edit Exercise');
      
      await editExercisePage.editExercise()
      await page.waitForLoadState()
      
      for (let i = 0; i < 4; i++) {
        let cellValuesArray = await exercisesPage.tableCells.allTextContents()
        let editExerciseDataValuesArray = Object.values(editExerciseData)
        expect(cellValuesArray[i]).toMatch(editExerciseDataValuesArray[i])
      }  
    });

    test('Verify "delete" action', async ({ exercisesPage }) => {
      const numOfTableBodyRowsBeforeDeletion = await exercisesPage.tableBodyRows.count()
      await exercisesPage.deleteButton.last().click()
      const numOfTableBodyRowsAfterDeletion = await exercisesPage.tableBodyRows.count()

      expect(numOfTableBodyRowsAfterDeletion).toBeLessThan(numOfTableBodyRowsBeforeDeletion)
    });
})