
describe('Searchbox test', () => {
    before(function() {
        cy.visit('http://zero.webappsecurity.com/index.html')
    })

    it('Type into searchbox and submit viwth pressing enter', () => {
        cy.get('#searchTerm').type('Some text {enter}')
    })

    it('Show search results page', () => {
        cy.get('h2').contains('Search Results:')
    })
})