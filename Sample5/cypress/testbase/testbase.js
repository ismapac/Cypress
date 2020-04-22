export function Open(url)
{
    cy.visit(url)
}

export function Click(locator)
{
    if(locator.includes('//'))
        cy.xpath(locator).click()
    else
        cy.get(locator).click()
}

export function Fill(locator, text)
{
    if(locator.includes('//'))
        cy.xpath(locator).type(text)
    else
        cy.get(locator).type(text)
}

export function DontSee(locator)
{
    if(locator.includes('//'))
        cy.xpath(locator).should('not.be.visible')
    else
        cy.get(locator).should('not.be.visible')
}

export function UploadFile(locator, fileName) {
    cy.fixture(fileName).then(fileContent => {
        cy.get(locator).upload({fileContent, fileName, mimeType: 'application/json'});
    });
}

export function ValidateUI(locator)
{
    cy.get(locator).matchImageSnapshot();
}

export function InjectAxe()
{
    cy.injectAxe()
}

export function CheckA11YIssues()
{
    const A11YOptions =
        {
            runOnly: {
                type: 'tag',
                values: ['wcag2a', 'wcag2aa', 'section508']
            }
        }

    cy.checkA11y(A11YOptions)
}