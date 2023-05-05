describe('Navbar Test', () => {
    before(function() {
        cy.visit('http://zero.webappsecurity.com/index.html')
    })

    it('Display online banking content', () => {
        cy.get('#onlineBankingMenu').contains('Online Banking').click()
        cy.url().should('include', 'online-banking.html')
        cy.get('h1').contains('Online Banking').should('be.visible')
    })

    it('Display feedback content', () => {
        cy.get('#feedback').contains('Feedback').click()
        cy.url().should('include', 'feedback.html')
        cy.get('#feedback-title').contains('Feedback').should('be.visible')
    })

    it('Display homepage content', () => {
        cy.get('.brand').contains('Zero Bank').click()
        cy.url().should('include', 'index.html')
        cy.get('h4').contains('Online Banking').should('be.visible')
    })
})