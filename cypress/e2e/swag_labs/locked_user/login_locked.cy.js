/// <reference types="cypress" />

import Login from "../../../PageObjects/swag_labs_page/loginPage"

context('Validate locked access', () => {
    before(function () {
        cy.visit('https://www.saucedemo.com')
    })

    describe('Locked out user', () => {
        const sesion = new Login()

        it('Login', () => {
            cy.fixture('credentials').then((cred) => {
                sesion.typeUserName(cred.locked_user)
                sesion.typePassword(cred.password)
              })
            sesion.clickSubmit()
        })

        it('Confirm locked access', () => {
            sesion.readMessage('Epic sadface: Sorry, this user has been locked out.')
        })
    })
})