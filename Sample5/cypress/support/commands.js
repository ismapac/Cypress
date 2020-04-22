// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
import { addMatchImageSnapshotCommand } from 'cypress-image-snapshot/command';
addMatchImageSnapshotCommand({
    failureThreshold: Cypress.env('uiValidationThreshold'),
    failureThresholdType: 'percent',
    customSnapshotsDir: 'cypress/visualtests',
    customDiffDir: 'cypress/visualtests/diffs'
});

Cypress.Commands.add('getIFrameElement', (iFrameSelector, elementSelector) => {
    cy.get(iFrameSelector).then($element=> {
        const $body = $element.contents().find('body');
        let stripe = cy.wrap($body)
        stripe.find(elementSelector).eq(0)
    })
})