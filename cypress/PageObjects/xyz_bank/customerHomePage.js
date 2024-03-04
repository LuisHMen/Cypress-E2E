class customerHomePage {

    accountNumber = '#accountSelect'
    transactionsTab = '[ng-click="transactions()"]'
    depositTab = '[ng-click="deposit()"]'
    withdrawlTab = '[ng-model="amount"]'

    amountDeposited = 'input[type="number"]'
    depositBtn = 'button[type="submit"]'
    confirmationMsg = '[ng-show="message"]'

    clickTransactionsTab(boton) {
        cy.get(this.transactionsTab).click()
    }

    clickDepositTab() {
        cy.get(this.depositTab).click()
    }

    deposit(amount) {
        cy.get(this.amountDeposited).type(amount)
        cy.get(this.depositBtn).click()
    }

    verifyDeposit() {
        cy.get(this.confirmationMsg).should('have.text', 'Deposit Successful')
    }
}

export default customerHomePage