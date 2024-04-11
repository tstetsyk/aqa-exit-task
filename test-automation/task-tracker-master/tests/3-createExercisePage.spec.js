const { expect } = require('@playwright/test');
const { test } = require('../fixture');

test.describe('Create Exercise Page', async () => {
    test.beforeEach(async ({ createExercisePage }) => {
      await createExercisePage.navigate()
    });

    test('Check page title', async ({ createExercisePage }) => {
      await expect(createExercisePage.mainHeading).toContainText('Create New Exercise');
    });

    test('Check "Username" input label', async ({ createExercisePage }) => {
      await expect(createExercisePage.userNameLabel).toBeVisible()
    });

    test('Check value displays by default in "Username" input', async ({ createExercisePage }) => {
      await expect(createExercisePage.userNameDropDown).toContainText('Choose a user')
    });

    test('Check "Description" input label', async ({ createExercisePage }) => {
      await expect(createExercisePage.descriptionLabel).toBeVisible()
    });

    test('Check "Description" input is empty.', async ({ createExercisePage }) => {
      await expect(createExercisePage.descriptionInputField).toBeEmpty()
    });

    test('Check "Duration" input label', async ({ createExercisePage }) => {
      await expect(createExercisePage.durationLabel).toBeVisible()
    });

    test('Check value displays by default in "Duration" input', async ({ createExercisePage }) => {
      await expect(createExercisePage.durationInputField).toHaveValue('0')
    });

    test('Check "Date" input label', async ({ createExercisePage }) => {
      await expect(createExercisePage.dateLabel).toBeVisible()
    });

    test('Check value format in "Date" input (e.g. 12/14/2021)', async ({ createExercisePage }) => {
      await createExercisePage.datepicker.click()
      await createExercisePage.currentDate.click()

      await expect(createExercisePage.datepicker).toHaveValue(/^(0[1-9]|1[0-2])\/(0[1-9]|1[0-9]|2[0-9]|3[0-1])\/(19\d{2}|20[0-1][0-9]|202[0-4])$/)
    });

    test('Check submit button is enabled', async ({ createExercisePage }) => {
      await expect(createExercisePage.createExerciseButton).toBeEnabled()
    });

    test('Check submit button text', async ({ createExercisePage }) => {
      await expect(createExercisePage.createExerciseButton).toContainText('Create Exercise Log')
    });

    test('Verify new exercise creation', async ({ page, createExercisePage, exercisesPage }) => {
      await createExercisePage.createNewExercise()
      await page.waitForLoadState()

      expect(await createExercisePage.getUrl()).toEqual(await exercisesPage.getUrl())
      expect(await exercisesPage.tableBodyRows.count()).toBeGreaterThanOrEqual(1)
    });
  })