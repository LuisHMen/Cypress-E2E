class Login {

    logo = '.login_logo'
    username = '#user-name'
    password = '#password'
    btnSubmit = '#login-button'
    lblTitle = '.title'

    errorMessage = '.error-message-container'

    typeUserName(username) {
        cy.get(this.username).type(username)
    }

    typePassword(password) {
        cy.get(this.password).type(password)
    }

    clickSubmit() {
        cy.get(this.btnSubmit).click()
    }

    verifyLogin() {
        cy.get(this.lblTitle)
            .should('have.text', 'Products')
    }

    verifyLogout() {
        cy.get(this.logo)
            .should('have.text', 'Swag Labs')

        cy.get(this.btnSubmit)
            .should('have.value', 'Login')
    }

    readMessage(message) {
        cy.get(this.errorMessage)
            .should('have.text', message)
    }
}

export default Login