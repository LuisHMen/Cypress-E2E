class transactionsPage {

    backBtn = '[ng-click="back()"]'
    resetBtn = '[ng-click="reset()"]'
    
    startDate = '#start'
    endDate = '#end'
    dateTimeColumn = 'a[href="#"]'
    rows = '#anchor0'

    filterByDate() {
        cy.get(this.startDate).type("2024-02-01T11:11:37")
    }
    
    clickBackBtn() {
        cy.get(this.backBtn).click()
        //cy.get('//button[text()="' + button + '"]').click()
    }

    clickResetBtn() {
        cy.get(this.resetBtn).click()
    }

    sortTransactionsByDate() {
        cy.get(this.dateTimeColumn).click()
    }
}

export default transactionsPage