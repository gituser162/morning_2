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
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('registration', (username, password) => { 
    cy.request({
        url: 'https://api.demoblaze.com/signup', 
        method: 'POST',
        body: {
            username,
            password
        },
    })
 })
 Cypress.Commands.add('reg', (username, password) => {  
    cy.visit('https://www.demoblaze.com/');
    cy.get('#signin2').click();
    cy.wait(1000);
    cy.get('#sign-username').type(`${username}`);
    cy.get('#sign-password').type(`${password}`);
    cy.get('.btn').contains('Sign up').click();
 })
 Cypress.Commands.add('login', (username, password) => {  
    cy.visit('https://www.demoblaze.com/');
    cy.get('#login2').click();
    cy.wait(1000);
    cy.get('#loginusername').type(username);
    cy.get('#loginpassword').type(password);
    cy.get('.btn').contains('Log in').click();
 })