class cartPage {
    productName = '.inventory_item_name'
    btnRemove = '.cart_button'
    removedItem = '.removed_cart_item'

    readProductName(pName, pName2, pName3) {
        cy.get(this.productName)
            .eq(0).should('have.text', pName)
        cy.get(this.productName)
            .eq(1).should('have.text', pName2)
        cy.get(this.productName)
            .eq(2).should('have.text', pName3)
    }

    verifyItems(numProducts) {
        cy.get(this.productName)
            .should('have.length', numProducts)
            .and('be.visible')
    }

    clickBtnRemove(numProducts) {
        numProducts = numProducts - 1;

        for (var i = numProducts; i >= 0; i--) {
            cy.get(this.btnRemove)
                .eq(i)
                .click()
        }
    }

    verifyRemovedItems() {
        cy.get(this.removedItem).should('not.be.visible')
    }
}

export default cartPage