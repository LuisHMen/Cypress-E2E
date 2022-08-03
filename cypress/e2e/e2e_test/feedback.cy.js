describe('Feedback test', () => {
    before(function() {
        cy.visit('http://zero.webappsecurity.com/index.html')
    })

    it('Load feedback form', () => {
        cy.get('#feedback').contains('Feedback').click()
        cy.get('form').should('be.visible')
    })

    it('Fill feedback form', () => {
        cy.get('#name').type('Luis H. Men')
        cy.get('#email').type('email@testing.com')
        cy.get('#subject').type('Just testing')
        cy.get('#comment').type("Luis is doing great tests")
    })

    it('Submit feedback form', () => {
        cy.get('.btn-signin').click()
    })

    it('Display feedback message', () => {
        cy.get('#feedback-title').contains('Feedback').should('be.visible', '')
    })
})