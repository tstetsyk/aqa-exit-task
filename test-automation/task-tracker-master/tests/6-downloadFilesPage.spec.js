const { expect } = require('@playwright/test');
const { test } = require('../fixture');
const { readdir, rm } = require('node:fs/promises');

test.describe('Download Files Page', async () => {
    test.beforeEach(async ({ downloadFilesPage }) => {
      await downloadFilesPage.navigate()
    });

    test('Check header title', async ({ downloadFilesPage }) => {
      await expect(downloadFilesPage.mainHeading).toContainText('Download Files');
    });

    test('Check "Upload File" button', async ({ downloadFilesPage }) => {
      await expect(downloadFilesPage.downloadUsersButton).toBeEnabled()
    });

    test('Verify file downloading', async ({ page, downloadFilesPage }) => {
      const downloadPromise = page.waitForEvent('download');
      await downloadFilesPage.downloadUsersButton.click()
      const download = await downloadPromise;
      await download.saveAs('test-data/' + download.suggestedFilename());
      
      expect(await readdir('test-data/')).toContain('download_users.json');
      
      await rm('test-data/download_users.json');       
    });
})