const { expect } = require('@playwright/test');
const { test } = require('../fixture');

test.describe('Main Page', async () => {
    test.beforeEach(async ({ mainPage }) => {
      await mainPage.navigate()
    });

    test('Check header title', async ({ mainPage }) => {
      await expect(mainPage.mainHeading).toContainText('Logged Exercises');
    });

    test('Check header navigation menu items', async ({ mainPage }) => {
      expect(await mainPage.navigationMenuItems.allTextContents()).toEqual(expect.arrayContaining(['Exercises','Create Exercise Log','Create User','Upload Files','Download Files','MailTo']))
    });
})

