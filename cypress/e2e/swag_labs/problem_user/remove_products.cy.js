/// <reference types="cypress" />

import Login from "../../../PageObjects/swag_labs_page/loginPage"
import homePage from "../../../PageObjects/swag_labs_page/homePage"
import cartPage from "../../../PageObjects/swag_labs_page/cartPage"

context('Remove all the products in the cart', () => {

    const ss = new Login()
    const hp = new homePage()
    const cp = new cartPage()

    before(function () {
        cy.visit('https://www.saucedemo.com')
    })
    
    describe('Remove products', () => {
        it('Login', () => {
            cy.fixture('credentials').then((cred) => {
                ss.typeUserName(cred.user_problems)
                ss.typePassword(cred.password)
            })
            ss.clickSubmit()
        })

        it('Confirm the access', () => {
            ss.verifyLogin()
        })
    
        it('Go to cart and delete', () => {
            hp.clickCart()
            cp.verifyItems(3)
            cp.clickBtnRemove(3)
        })

        it('Check the removed items', () => {
            cp.verifyRemovedItems()
        })
    })

    describe('Logout', () => {
        it('Logout', () => {
            hp.clickMenu()
            hp.clickLogout()
        })

        it('Confirm logout', () => {
            ss.verifyLogout()
        })
    })
})