import { faker } from '@faker-js/faker';
const { expect } = require('@playwright/test');
const { test } = require('../fixture');

test.describe('Create User Page', async () => {
    test.beforeEach(async ({ createUserPage }) => {
      await createUserPage.navigate()
    });

    test('Check page title', async ({ createUserPage }) => {
      await expect(createUserPage.mainHeading).toContainText('Create New User');
    });

    test('Check input label', async ({ createUserPage }) => {
      await expect(createUserPage.userNameLabel).toContainText('Username:');
    });

    test('Check input is empty', async ({ createUserPage }) => {
      await expect(createUserPage.userNameInputField).toBeEmpty();
    });

    test('Check submit button is enabled', async ({ createUserPage }) => {
      await expect(createUserPage.createUserButton).toBeEnabled();
    });

    test('Check submit button text', async ({ createUserPage }) => {
      await expect(createUserPage.createUserButton).toContainText('Create User');
    });

    test('Verify new user creation', async ({ createUserPage }) => {
      const randomName = faker.person.fullName()
      await createUserPage.createNewUser(randomName)

      await expect(await createUserPage.getUserWasAddedText(randomName)).toBeVisible()
    });
})

