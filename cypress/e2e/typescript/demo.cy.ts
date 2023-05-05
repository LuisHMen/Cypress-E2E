describe('Demo test', () => {
    it('Visit a website', () => {
        cy.visitHomePage()
        cy.visitFeedbackPage()
    })
})