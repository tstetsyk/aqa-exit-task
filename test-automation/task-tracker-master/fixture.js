import { test as base } from '@playwright/test';
import { MainPage } from './pages/MainPage';
import { ExercisesPage } from './pages/ExercisesPage';
import { CreateExercisePage } from './pages/CreateExercisePage';
import { CreateUserPage } from './pages/CreateUserPage';
import { FileUploadPage } from './pages/FileUploadPage';
import { DownloadFilesPage } from './pages/DownloadFilesPage';
import { EditExercisePage } from './pages/EditExercisePage';

export const test = base.extend({
    mainPage: async ({ page }, use) => {
        await use(new MainPage(page));
    },
    exercisesPage: async ({ page }, use) => {
        await use(new ExercisesPage(page));
    },
    createExercisePage: async ({ page }, use) => {
        await use(new CreateExercisePage(page));
    },
    editExercisePage: async ({ page }, use) => {
        await use(new EditExercisePage(page));
    },
    createUserPage: async ({ page }, use) => {
        await use(new CreateUserPage(page));
    },
    fileUploadPage: async ({ page }, use) => {
        await use(new FileUploadPage(page));
    },
    downloadFilesPage: async ({ page }, use) => {
        await use(new DownloadFilesPage(page));
    }
});