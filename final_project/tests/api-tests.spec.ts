import { test, expect, request, BrowserContext, APIRequestContext } from '@playwright/test';
import { Serializable } from 'child_process';
import { LoginPage } from 'src/pages/login-page';

let context: BrowserContext;
let apiContext: APIRequestContext;
let sharedData: string;

test.beforeAll(async ({ browser }) => {
    context = await browser.newContext();
    const newPage = await context.newPage();
    const loginPage = new LoginPage(newPage, context);

    await loginPage.goto();
    if (await loginPage.isLoggedIn()) {
        await loginPage.logout();
    }
    await loginPage.login(process.env.LOGIN as string, process.env.PASSWORD as string);
    await loginPage.logoutButton.waitFor();

    const cookies = await context.cookies();
    apiContext = await request.newContext({
        baseURL: 'https://new.fophelp.pro',
        storageState: {
            cookies,
            origins: []
        }
    });
    await newPage.close();
    sharedData = 'ready';
});

test.beforeEach(async () => {
    expect(sharedData).toBe('ready');
    try {
        await apiContext.get('/api/react/Authenticate/refresh');
    } catch (e) {
        // due to 500 error
    }
});

test.describe('Testing API of expenses', () => {
    async function getExpensesObjects(): Promise<Serializable> {
        const response = await apiContext.get('/api/expenses');
        expect(response.ok()).toBeTruthy();
        return response.json();
    }

    function getExpensesKey(obj: Serializable): string {
        return Object.keys(obj)[0];
    }

    test('POST add expenses', async () => {
        const response = await apiContext.post('/api/expenses/add', {
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                Cash: false,
                Comment: 'Test1',
                Currency: 'UAH',
                Date: '2025-04-21',
                ID: 'ID-3000',
                Expense: '3000'
            }
        });
        expect(response.ok()).toBeTruthy();
    });

    test('GET expenses', async () => {
        const body = (await getExpensesObjects()) as Record<string, any>;
        const expensesKey = getExpensesKey(body);
        const expensesArray = body[expensesKey];
        expect(expensesArray.length).toBe(1);
    });

    test('DELETE expenses', async () => {
        // get Id of the entity
        const body1 = (await getExpensesObjects()) as Record<string, any>;
        const expensesKey = getExpensesKey(body1);
        const expensesObject = body1[expensesKey][0];

        // run delete
        expensesObject.Expense = expensesObject.Expense.toString();
        const deleteResponse = await apiContext.post('/api/expenses/delete', {
            data: expensesObject
        });
        expect(deleteResponse.ok()).toBeTruthy();

        // expect to have no expenses
        const body2 = (await getExpensesObjects()) as Record<string, any>;
        expect(body2).toStrictEqual({});
    });
});
