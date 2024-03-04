import loginPage from "../../../PageObjects/xyz_bank/loginPage";
import customerHomePage from "../../../PageObjects/xyz_bank/customerHomePage";
import transactionsPage from "../../../PageObjects/xyz_bank/transactionsPage";

context('We need to check the transactions using the filters.', () => {
    const lp = new loginPage()
    const chp = new customerHomePage()
    const tp = new transactionsPage()

    before(function () {
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/')
    })

    describe('Login', () => {
        it('Customer login', () => {
            lp.clickCustomerBtn()

            cy.fixture('users').then((cts) => {
                lp.selectCostumer(cts.customers[0])
            })
            lp.clickSubmit()
        })

        it('Confirm the customer login was successful', () => {
            cy.fixture('users').then((cts) => {
                lp.verifyLogin(cts.customers[0])
            })
        })
    })

    describe('Check and filter transactions', () => {
        it('Go transactions', () => {
            chp.clickTransactionsTab('Transactions')
        })

        it('Find the last transactions', () => {
            // todo
        })
    })

    // describe('Reset transactions and back home page', () => {
    //     it('Reset transactions', () => {
    //         tp.clickResetBtn()
    //     })

    //     it('Back Home Page', () => {
    //         tp.clickBackBtn()
    //     })
    // })
})