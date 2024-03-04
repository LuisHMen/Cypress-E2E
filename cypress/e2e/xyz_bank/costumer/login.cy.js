import loginPage from "../../../PageObjects/xyz_bank/loginPage"

context('Deposit a lot of money', () => {
    const lp = new loginPage()

    before(function () {
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/')
    })

    describe('Valid login', () => {
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

    describe('Invalid login', () => {
        TODO
    })
})