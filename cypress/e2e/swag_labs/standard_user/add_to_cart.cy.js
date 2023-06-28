/// <reference types="cypress" />

import Login from "../../../PageObjects/swag_labs_page/loginPage"
import homePage from "../../../PageObjects/swag_labs_page/homePage"
import productPage from "../../../PageObjects/swag_labs_page/productPage"
import cartPage from "../../../PageObjects/swag_labs_page/cartPage"

context('Add products to cart and validate the total amount to pay', () => {

    const ss = new Login()
    const hp = new homePage()
    const pp = new productPage()
    const cp = new cartPage()

    before(function () {
        cy.visit('https://www.saucedemo.com')
    })

    describe('Choose products', () => {
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

        it('Add to cart', () => {   
            hp.addToCart('Sauce Labs Onesie')
        })

        it('Confirm product description and add it to cart', () => {
            pp.readName('Sauce Labs Onesie')
            pp.readDesc("Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel.")

            pp.clickAdd()
        })

        it('Check the cart', () => {
            hp.clickCart()
            cp.readProductName('Sauce Labs Bike Light', 'Sauce Labs Bolt T-Shirt', 'Sauce Labs Onesie')
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