///<reference types="Cypress"/>
const currentCostSelector = '[name="currentheatingcost"]'; 
const newCostSelector = '[name="newheatingcost"]'; 
const totalSavingsSelector =  '#savings > p';
const totalSavingsValue = '#VTAS';

beforeEach(() => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    });
    cy.visit('https://consumersenergymanagement.ca/savings-calculator/');
});

describe('Savings Calculator - Heat Prices Calculations', () => {
    beforeEach(() => {
        cy.fixture('savingsData').as('data');
    });

    it('should change the price in the Current Heating Cost column', function() {
        cy.fillForm(this.data);
        cy.get(currentCostSelector).invoke('val').then((initialCost) => {
            cy.changeHeatingType('Natural Gas', this.data.heatingTypes.current);
            cy.checkCostChange(currentCostSelector, initialCost);
        });
    });

    it('should change the price in the New Heating Cost column', function() {
        cy.fillForm(this.data);
        cy.get(currentCostSelector).invoke('val').then((initialCost) => {
            cy.changeHeatingType(this.data.heatingTypes.current, this.data.heatingTypes.new);
            cy.checkCostChange(newCostSelector, initialCost);
        });
    });

    it('should display savings when heating types are changed', function() {
        cy.fillForm(this.data);
        cy.changeHeatingType(this.data.heatingTypes.current, this.data.heatingTypes.new);
        cy.wait(2000); 

        cy.get(totalSavingsSelector).should('be.visible');
        cy.get(totalSavingsValue).invoke('text').then((savings) => {
            console.log('Total Savings:', savings.trim());
            expect(savings.trim()).to.not.equal('');
            expect(parseFloat(savings.trim().replace('$', ''))).not.to.be.equal(0);
        });
    });
});
