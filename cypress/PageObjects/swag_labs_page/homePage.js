class homePage {
    lblTitle = '.title'
    burgerMenu = '#react-burger-menu-btn';
    btnLogout = '#logout_sidebar_link';
    btnCart = '.shopping_cart_link'

    // products
    productOne = '#add-to-cart-sauce-labs-bike-light'
    productTwo = '#add-to-cart-sauce-labs-bolt-t-shirt'
    selectProduct = '.inventory_item_name'

    readTitle() {
        cy.get(this.lblTitle)
            .should('have.text', 'Products')
    }

    clickMenu() {
        cy.get(this.burgerMenu).click()
    }

    clickLogout() {
        cy.get(this.btnLogout).click()
    }

    addToCart(article) {
        cy.get(this.productOne).click()
        cy.get(this.productTwo).click()
        cy.get(this.selectProduct)
            .contains(article)
            .click()
    }

    clickCart() {
        cy.get(this.btnCart).click()
    }
}

export default homePage