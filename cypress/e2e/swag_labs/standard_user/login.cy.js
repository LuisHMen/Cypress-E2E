/// <reference types="cypress" />

import Login from "../../../PageObjects/swag_labs_page/loginPage"
import homePage from "../../../PageObjects/swag_labs_page/homePage"

context('Login and Logout', () => {
    before(function () {
        cy.visit('https://www.saucedemo.com')
    })
    
    describe('Valid credentials', () => {
        const sesion = new Login()
        const hp = new homePage()

        it('Login', () => {
            cy.fixture('credentials').then((cred) => {
                sesion.typeUserName(cred.standard_user)
                sesion.typePassword(cred.password)
              })
            sesion.clickSubmit()
        })
    
        it('Confirm the access', () => {
            sesion.verifyLogin()
        })
    
        it('Logout', () => {
            hp.clickMenu()
            hp.clickLogout()
        })
    
        it('Confirm logout', () => {
            sesion.verifyLogout()
        })
    })
})