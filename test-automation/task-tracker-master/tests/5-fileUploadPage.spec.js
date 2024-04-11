const { expect } = require('@playwright/test');
const { test } = require('../fixture');
const path = require('node:path'); 

test.describe('File Upload Page', async () => {
    test.beforeEach(async ({ fileUploadPage }) => {
      await fileUploadPage.navigate()
    });

    test('Check header title', async ({ fileUploadPage }) => {
      await expect(fileUploadPage.mainHeading).toContainText('File Upload');
    });

    test('Check "Choose File" input: default state/after file upload', async ({ fileUploadPage }) => {
      await expect(fileUploadPage.uploadFileInputField).toBeEmpty()

      await fileUploadPage.uploadFileInputField.setInputFiles(path.join(__dirname, 'testFile.txt'));

      await expect(fileUploadPage.uploadFileInputField).toHaveValue(/.*testFile.txt/);
    });

    test('Check "Upload File" button', async ({ fileUploadPage }) => {
      await expect(fileUploadPage.uploadFileButton).toBeEnabled()
    });

    test('Check table header labels', async ({ fileUploadPage }) => {
      await expect(fileUploadPage.tableHeader).toBeVisible()

      expect(await fileUploadPage.tableHeaderLabels.allTextContents()).toEqual(expect.arrayContaining(['File Name', 'Action']))
    });

    test('Verify file uploading', async ({ fileUploadPage }) => {
      await fileUploadPage.uploadFileInputField.setInputFiles(path.join(__dirname, 'testFile.txt'))
      await fileUploadPage.uploadFileButton.click()
      await fileUploadPage.tableBodyRows.first().waitFor()

      await expect(fileUploadPage.tableBodyRows).toHaveCount(1)
      expect(await fileUploadPage.tableBodyCells.allTextContents()).toEqual(expect.arrayContaining(['testFile.txt', 'delete']))
    });

    test('Verify file deletion', async ({ fileUploadPage }) => {
      if(await fileUploadPage.tableBodyRows.count() < 1) {
        await fileUploadPage.uploadFileInputField.setInputFiles(path.join(__dirname, 'testFile.txt'))
        await fileUploadPage.uploadFileButton.click()
      }

      await fileUploadPage.deleteButton.click()

      await expect(fileUploadPage.tableBodyRows).toBeHidden()
    });

})