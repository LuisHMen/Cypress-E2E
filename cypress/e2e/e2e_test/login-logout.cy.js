describe('Login / logout test', () => {
  before(function () {
    cy.visit('http://zero.webappsecurity.com/index.html')
    cy.url().should('include', 'index.html')
  })

  it('Try to login with invalid credentials', () => {
    cy.get('#signin_button').click()
    cy.get('#login_form').should('be.visible')
    cy.get('#user_login').type('Invalid username')
    cy.get('#user_password').type('Invalid password')
    cy.get('input[type="submit"]').click()
  })

  it('Display error message', () => {
    cy.get('.alert-error')
      .contains('Login and/or password are wrong.')
      .should('be.visible')
  })

  it('Login to application', () => {
    cy.fixture('users').then((user) => {
      const username = user.user
      const password = user.pwd

      cy.login(username, password)
    })

    cy.go('back')
  })

  it('Logout from application', () => {
    cy.contains('username').click()
    cy.get('#logout_link').click()
    cy.url().should('include', 'index.html')
  })
})
