context('testsuite', ()=> {
    it('testCaseOne', () => {
        cy.visit('https://www.atlassian.com/')
        cy.get('#gray_link').click()
        cy.get('#username').type('nepagit552@jszmail.com')
        cy.get('#login-submit > .css-1vqao0l > .css-t5emrf > span').click()
        cy.get('#password').type('abcABC@123')
        cy.get('#login-submit > .css-1vqao0l > .css-t5emrf > span').click()
        cy.get('#gray_link').should('not.be.visible')
    })
})