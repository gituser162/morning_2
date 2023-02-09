/// <reference types='cypress' />


const username = 'ultraUniqueName' + Math.round(Math.random()*100000);
const password = 'Pa$$w0rd!';
describe('Product Store app', () => {
  before(() => {
    cy.visit('https://www.demoblaze.com/');
  });
  
  it('should provide an ability to sign up', () => {
    cy.get('#signin2')
    .click();

    cy.wait(1000);

    cy.get('#sign-username')
      .type(`${username}`);

    cy.get('#sign-password')
      .type(`${password}`);

    cy.get('.btn').contains('Sign up')
      .click();

    cy.on('window:alert', (str) => {
        expect(str).to.equal(`Sign up successful.`)
    });
    });
    it('should provide an ability to log in', () => {
    // cy.registration(username, password); //POST реквест на реєстрацію, чомусь не працює, хоча і повертає статус 200
    cy.reg(username, password);

    cy.get('#login2')
      .click();

    cy.wait(1000);

    cy.get('#loginusername')
      .type(username);

    cy.get('#loginpassword')
      .type(password);

    cy.get('.btn')
      .contains('Log in')
        .click();

    cy.get('#nameofuser')
      .should('contain', username);
  });
  it('should provide an ability to add a product to the cart', () => {
    cy.reg(username, password);
    cy.login(username, password);
    
    cy.get(`[onclick="byCat('phone')"]`)
      .click();

    cy.get('#tbodyid')  
      .contains('Samsung galaxy s6')
        .click();

    cy.get('.btn')
      .contains('Add to cart')  
        .click();

    cy.get('#cartur')
      .click();

    cy.get('.col-lg-8')
      .should('contain', 'Samsung galaxy s6');
  });
});