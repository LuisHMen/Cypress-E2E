describe('', () => {
    before(function() {
        cy.visit('http://zero.webappsecurity.com/index.html')
    })

    it('Click on the signin button', () => {
        cy.get('#signin_button').click()
    })

    it('Click on the forgotten password', () => {
        cy.get('.offset3 a').click()
    })

    it('Fill email form', () => {
        cy.get('#user_email').type('luishmen@pruebas.com')
    })

    it('Click on send password button', () => {
        cy.get('input[type="submit"]').click()
    })
})