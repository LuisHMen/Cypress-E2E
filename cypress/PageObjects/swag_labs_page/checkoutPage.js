class checkoutPage {
    Name = '#first-name'
    lastName = '#last-name'
    zipCode = '#postal-code'

    product = '.inventory_item_name'
    price = '.inventory_item_price'
    totalPrice = '.summary_total_label'

    paidMessage = '.complete-header'

    clickButton(btnName) {
        cy.get("[data-test='" + btnName + "']").click()
    }

    enterInformation(name, last_name, zip_code) {
        cy.get(this.Name).type(name)
        cy.get(this.lastName).type(last_name)
        cy.get(this.zipCode).type(zip_code)
    }

    verifyItemsInfo(pName, pName2, pName3) {
        cy.get(this.product).eq(0)
            .should('have.text', pName)
        cy.get(this.product).eq(1)
            .should('have.text', pName2)
        cy.get(this.product).eq(2)
            .should('have.text', pName3)
    }

    verifyPaidInfo(price1, price2, price3) {
        cy.get(this.price).eq(0)
            .should('have.text', price1)
        cy.get(this.price).eq(1)
            .should('have.text', price2)
        cy.get(this.price).eq(2)
            .should('have.text', price3)
    }

    confirmTotalPrice(total_Price) {
        cy.get(this.totalPrice)
            .should('have.text', total_Price)
    }

    confirmPaid(message) {
        cy.get(this.paidMessage)
            .should('have.text', message)
    }
}

export default checkoutPage