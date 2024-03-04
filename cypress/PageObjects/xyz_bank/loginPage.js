class loginPage {
    
    customerBtn = '.borderM > :nth-child(1) > .btn'
    nameList = '#userSelect'
    btnSubmit = '.btn.btn-default'
    welcomeMsg = '.fontBig.ng-binding'

    selectCostumer(customer) {
        cy.get(this.nameList).select(customer)
    }

    clickCustomerBtn() {
        cy.get(this.customerBtn).click()
    }

    clickSubmit() {
        cy.get(this.btnSubmit).click()
    }

    verifyLogin(customer) {
        cy.get(this.welcomeMsg).should('have.text', customer)
    }
}

export default loginPage