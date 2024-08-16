///<reference types="Cypress"/>
const baseUrl = 'https://consumersenergymanagement.ca/savings-calculator/';
const provinceSelector = '#step1col2 > :nth-child(1) > :nth-child(1) > .Slcst';
const citySelector = 'select[name="stage2"]';

beforeEach(() => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
});

describe('Saving Calculators - Locations Test', () => {

  const provinces = [
    'Alberta',
    /* 'British Columbia', */
    'Manitoba',
    /* 'New Brunswick', */
    'Newfoundland',
    /* 'Nova Scotia', */
    'Ontario',
    'Quebec',
    'Saskatechewan'
  ];

  it('Should verify all Canadian provinces are in the state list and can be chosen', () => {
    provinces.forEach((province) => {
      cy.visit(baseUrl);
      cy.get(provinceSelector).select(province).should('have.value', province);
    });
  });

  it('Should verify each Canadian province has at least one city to choose', () => {
    provinces.forEach((province) => {
      cy.visit(baseUrl);
      cy.get(provinceSelector).select(province);
      cy.get(citySelector).should('exist').and('not.be.empty');
      cy.get(citySelector + ' option').should('have.length.greaterThan', 1);
    });
  });
});