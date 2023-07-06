/// <reference types="cypress" />

context('Login and Logout', () => {
    before(function () {
        cy.visit('https://www.saucedemo.com')
    })

    describe('User with problems', () => {
        it('Login', () => {
            cy.fixture('credentials').then((cred) => {
                cy.get('#user-name').type(cred.user_problems)
                cy.get('#password').type(cred.password)
            })
            cy.get('#login-button').click()
        })

        it('Confirm the access', () => {
            cy.get('.title').should('have.text', 'Products')
        })

        it('Logout', () => {
            cy.get('#react-burger-menu-btn').click()
            cy.get('#logout_sidebar_link').click()
        })

        it('Confirm logout', () => {
            cy.get('.login_logo').should('have.text', 'Swag Labs')
            cy.get('#login-button').should('have.value', 'Login')
        })
    })
})