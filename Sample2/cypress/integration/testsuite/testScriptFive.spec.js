const I = require('../../testbase/testbase.js')

context('testsuite', ()=> {

    beforeEach(function () {
        I.Open(Cypress.config().baseUrl)
    })

    it('testCaseOne', () => {
        I.Click('#gray_link')
        I.Fill('#username', 'nepagit552@jszmail.com')
        I.Click('#login-submit > .css-1vqao0l > .css-t5emrf > span')
        I.Fill('#password', 'abcABC@123')
        I.Click('#login-submit > .css-1vqao0l > .css-t5emrf > span')
        I.DontSee('#gray_link')
    })
})