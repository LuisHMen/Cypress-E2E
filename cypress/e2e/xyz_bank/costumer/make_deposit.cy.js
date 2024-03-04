import customerHomePage from "../../../PageObjects/xyz_bank/customerHomePage"
import loginPage from "../../../PageObjects/xyz_bank/loginPage"

context('Deposit a lot of money', () => {
    const lp = new loginPage()
    const md = new customerHomePage()

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

    describe('First deposit', () => {
        it('Deposit', () => {
            md.clickDepositTab()
            md.deposit(750)
        })

        it('Confirm the Deposit was successful', () => {
            md.verifyDeposit()
        })
    })
})