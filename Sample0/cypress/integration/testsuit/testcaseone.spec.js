context('testcaseone', ()=>{
    it ('test case',()=> {
        cy.visit('https://www.google.com/')
        cy.get('.gLFyf').type("Cypress")
        cy.get('.FPdoLc > center > .gNO89b').click({force: true})
    })
})