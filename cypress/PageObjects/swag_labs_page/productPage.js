class productPage {
    productName = '.inventory_details_name'
    productDesc = '.inventory_details_desc'
    btnAddToCart = 'button'

    readName(pName) {
        cy.get(this.productName)
            .should('have.text', pName)
    }

    readDesc(pDesc) {
        cy.get(this.productDesc)
            .should('have.text', pDesc)
    }

    clickAdd() {
        cy.get(this.btnAddToCart)
            .contains('Add to cart')
            .click()
    }
}

export default productPage