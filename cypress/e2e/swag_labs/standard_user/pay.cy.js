/// <reference types="cypress" />

import Login from "../../../PageObjects/swag_labs_page/loginPage"
import homePage from "../../../PageObjects/swag_labs_page/homePage"
import cartPage from "../../../PageObjects/swag_labs_page/cartPage"
import checkoutPage from "../../../PageObjects/swag_labs_page/checkoutPage"

context('Validate the total amount to pay and pay', () => {

    const ss = new Login()
    const hp = new homePage()
    const cp = new cartPage()
    const chp = new checkoutPage()

    before(function () {
        cy.visit('https://www.saucedemo.com')
    })
    
    describe('Confirm the cart has products', () => {
        it('Login', () => {
            cy.fixture('credentials').then((cred) => {
                ss.typeUserName(cred.standard_user)
                ss.typePassword(cred.password)
            })
            ss.clickSubmit()
        })

        it('Confirm the access', () => {
            ss.verifyLogin()
        })

        it('Checkout the cart', () => {
            hp.clickCart()
            cp.readProductName('Sauce Labs Bike Light', 'Sauce Labs Bolt T-Shirt', 'Sauce Labs Onesie')
        })
    })

    describe('Checkout the amount and pay', () => {
        it('Enter your information', () => {
            chp.clickButton('checkout')
            chp.enterInformation('Luis', 'H. Men', '07300')
            chp.clickButton('continue')
        })

        it('Checkout products and total price', () => {
            chp.verifyItemsInfo('Sauce Labs Bike Light', 'Sauce Labs Bolt T-Shirt', 'Sauce Labs Onesie')
            chp.verifyPaidInfo('$9.99', '$15.99', '$7.99')
            chp.confirmTotalPrice('Total: $36.69')
        })

        it('Pay', () => {
            chp.clickButton('finish')
            chp.confirmPaid('Thank you for your order!')
            chp.clickButton('back-to-products')
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