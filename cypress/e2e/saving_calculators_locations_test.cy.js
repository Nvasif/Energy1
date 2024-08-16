///<reference types = "Cypress"/>
const baseUrl = 'https://consumersenergymanagement.ca/savings-calculator/';
const provinceSelector = '#step1col2 > :nth-child(1) > :nth-child(1) > .Slcst';
const citySelector = 'select[name="city"]';

beforeEach(() => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
});

describe('Saving Calculators - Locations Test', () => {
  it('Should verify all Canadian provinces are in the state list and can be chosen', () => {

    cy.visit(baseUrl);
    cy.get(provinceSelector).select('Alberta').should('contain', 'Alberta');

    cy.visit(baseUrl);
    cy.get(provinceSelector).select('British Columbia').should('contain.text', 'British Columbia');

    cy.visit(baseUrl);
    cy.get(provinceSelector).select('Manitoba').should('contain', 'Manitoba');

    cy.visit(baseUrl);
    cy.get(provinceSelector).select('New Brunswick').should('contain', 'New Brunswick');

    cy.visit(baseUrl);
    cy.get(provinceSelector).select('Newfoundland').should('contain', 'Newfoundland');

    cy.visit(baseUrl);
    cy.get(provinceSelector).select('Nova Scotia').should('contain', 'Nova Scotia');

    cy.visit(baseUrl);
    cy.get(provinceSelector).select('Ontario').should('contain', 'Ontario');

    cy.visit(baseUrl);
    cy.get(provinceSelector).select('Quebec').should('contain', 'Quebec');

    cy.visit(baseUrl);
    cy.get(provinceSelector).select('Saskatechewan');
    cy.get(provinceSelector).find('option:selected').should('contain.text', 'Saskatechewan');
  });

  it('Should verify each Canadian province has at least one city to choose', () => {
    cy.visit(baseUrl);
    cy.get(provinceSelector).select('Alberta');
    cy.get('select[name="stage2"]').should('exist').and('not.be.empty');
    cy.get('select[name="stage2"] option').should('have.length.greaterThan', 1);


    ///doesn't have a choice of cities
    /*     cy.visit(baseUrl);
    cy.get(provinceSelector).select('British Columbia');
    cy.get('select[name="stage2"]').should('exist').and('not.be.empty');
    cy.get('select[name="stage2"] option').should('have.length.greaterThan', 1); */

    cy.visit(baseUrl);
    cy.get(provinceSelector).select('Manitoba');
    cy.get('select[name="stage2"]').should('exist').and('not.be.empty');
    cy.get('select[name="stage2"] option').should('have.length.greaterThan', 1);

    cy.visit(baseUrl);
    cy.get(provinceSelector).select('New Brunswick');
    cy.get('select[name="stage2"]').should('exist').and('not.be.empty');
    cy.get('select[name="stage2"] option').should('have.length.greaterThan', 1);

    cy.visit(baseUrl);
    cy.get(provinceSelector).select('Newfoundland');
    cy.get('select[name="stage2"]').should('exist').and('not.be.empty');
    cy.get('select[name="stage2"] option').should('have.length.greaterThan', 1);

    cy.visit(baseUrl);
    cy.get(provinceSelector).select('Nova Scotia');
    cy.get('select[name="stage2"]').should('exist').and('not.be.empty');
    cy.get('select[name="stage2"] option').should('have.length.greaterThan', 1);

    cy.visit(baseUrl);
    cy.get(provinceSelector).select('Ontario');
    cy.get('select[name="stage2"]').should('exist').and('not.be.empty');
    cy.get('select[name="stage2"] option').should('have.length.greaterThan', 1);

    cy.visit(baseUrl);
    cy.get(provinceSelector).select('Quebec');
    cy.get('select[name="stage2"]').should('exist').and('not.be.empty');
    cy.get('select[name="stage2"] option').should('have.length.greaterThan', 1);

    cy.visit(baseUrl);
    cy.get(provinceSelector).select('Saskatechewan');
    cy.get('select[name="stage2"]').should('exist').and('not.be.empty');
    cy.get('select[name="stage2"] option').should('have.length.greaterThan', 1);
  });
});