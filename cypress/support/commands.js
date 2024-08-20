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
Cypress.Commands.add('fillForm', (data) => {
    cy.get('#step1col2 > :nth-child(1) > :nth-child(1) > .Slcst').select(data.province);
    cy.get('select[name="stage2"]').select(data.city);
    cy.get(':nth-child(6) > :nth-child(2) > .Slcst').select(data.bedrooms);
    cy.get(':nth-child(6) > :nth-child(3) > .Slcst').select(data.squareFootage);
    cy.get('[name="houseage"]').type(data.houseAge);
});

Cypress.Commands.add('changeHeatingType', (currentType, newType) => {
    cy.get('#heattype').select(currentType).trigger('change');
    cy.get('[name="heatingtype"]').select(newType).trigger('change');
    cy.wait(2000); 
});

Cypress.Commands.add('checkCostChange', (costSelector, initialCost) => {
    cy.get(costSelector).invoke('val').should((newCost) => {
        console.log('Initial Cost:', initialCost.trim());
        console.log('New Cost:', newCost.trim());
        expect(newCost.trim()).to.not.equal('');
        expect(newCost.trim()).to.not.equal(initialCost.trim());
    });
});
Cypress.Commands.add('navigateAndVerify', (page) => {
    cy.get(page.menuSelector).click();
    cy.url().should('include', '/');
    cy.get('h1').should('contain.text', page.expectedTitle);
  });
  Cypress.Commands.add('selectProvinceAndVerify', (province) => {
    cy.get('#step1col2 > :nth-child(1) > :nth-child(1) > .Slcst')
        .select(province)
        .should('contain.text', province);
});

Cypress.Commands.add('verifyCityOptions', () => {
    cy.get('select[name="stage2"]').should('exist').and('not.be.empty');
    cy.get('select[name="stage2"] option').should('have.length.greaterThan', 1);
});