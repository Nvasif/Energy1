///<reference types="Cypress"/>
const baseUrl = 'https://consumersenergymanagement.ca/savings-calculator/';
const provinceSelector = '#step1col2 > :nth-child(1) > :nth-child(1) > .Slcst';
const citySelector = 'select[name="stage2"]';
const currentHeatingSelector = '[name="currentHeating"]'; 
const newHeatingSelector = '[name="heatingtype"]'; 
const currentCostSelector = '[name="currentheatingcost"]'; 
const newCostSelector = '[name="newheatingcost"]'; 

beforeEach(() => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    });
    cy.visit(baseUrl);
});

describe('Savings Calculator - Heat Prices Calculations', () => {
    
    it('should fill in Alberta province and Calgary city and then change the price in the Current Heating Cost column', () => {
        cy.get(provinceSelector).select('Alberta');
        cy.get(citySelector).select('Calgary');
        cy.get(':nth-child(6) > :nth-child(2) > .Slcst').select('3');
        cy.get(':nth-child(6) > :nth-child(3) > .Slcst').select('1000');
        cy.get('[name="houseage"]').type('2010');

        cy.get(currentCostSelector).invoke('val').then((initialCost) => {
            console.log('Initial Cost before change:', initialCost.trim());


            cy.get('#heattype').select('Electric').trigger('change');
            cy.wait(2000);

            cy.get(currentCostSelector).invoke('val').should((newCost) => {
                console.log('New Cost after change:', newCost.trim());
                expect(newCost.trim()).to.not.equal('');
                expect(newCost.trim()).to.not.equal(initialCost.trim());
            });
        });
    });

    it('should fill in Alberta province and Calgary city and then change the price in the New Heating Cost column', () => {
        cy.get(provinceSelector).select('Alberta');
        cy.get(citySelector).select('Calgary');
        cy.get(':nth-child(6) > :nth-child(2) > .Slcst').select('3');
        cy.get(':nth-child(6) > :nth-child(3) > .Slcst').select('1000');
        cy.get('[name="houseage"]').type('2010');

        cy.get(currentCostSelector).invoke('val').then((initialCost) => {
            console.log('Initial Cost before change:', initialCost.trim());



            cy.get('#heattype').select('Electric').trigger('change');
            cy.get(newHeatingSelector).select('Oil').trigger('change');
            cy.wait(2000);

            cy.get(newCostSelector, { timeout: 10000 }).invoke('val').should((newCost) => {
                console.log('New Cost after change:', newCost.trim());
                expect(newCost.trim()).to.not.equal('');
                expect(newCost.trim()).to.not.equal(initialCost.trim());
            });
        });
    });

    it('should select Alberta province and Calgary city', () => {
        cy.visit(baseUrl);
        cy.get(provinceSelector).select('Alberta');
        cy.get(citySelector).select('Calgary');
        cy.get(':nth-child(6) > :nth-child(2) > .Slcst').select('3');
        cy.get(':nth-child(6) > :nth-child(3) > .Slcst').select('1000');
        cy.get('[name="houseage"]').type('2010');

        cy.get(currentCostSelector).invoke('val').then((initialCost) => {
            cy.get('#heattype').select('Electric').trigger('change');
            cy.wait(2000);
            cy.get(currentCostSelector).invoke('val').should((newCost) => {
                console.log('Initial Cost:', initialCost.trim());
                console.log('New Cost:', newCost.trim());
                expect(newCost.trim()).to.not.equal('');
                expect(newCost.trim()).to.not.equal(initialCost.trim());
            });
        });

        cy.get(currentCostSelector).invoke('val').then((initialCost) => {
            cy.get('#heattype').select('Electric').trigger('change');
            cy.get(newHeatingSelector).select('Oil').trigger('change');
            cy.wait(2000);
            cy.get(newCostSelector, { timeout: 10000 }).invoke('val').should((newCost) => {
                console.log('Initial Cost:', initialCost.trim());
                console.log('New Cost:', newCost.trim());
                expect(newCost.trim()).to.not.equal('');
                expect(newCost.trim()).to.not.equal(initialCost.trim());
            });
        });
        
        cy.get(newHeatingSelector).select('Oil').trigger('change');
        cy.wait(2000); 

        cy.get('#savings > p').should('be.visible');
        cy.get('#VTAS').invoke('text').then((savings) => {
            expect(savings.trim()).to.not.equal('');
            expect(parseFloat(savings.trim().replace('$', ''))).not.to.be.equal(0);
        });
    });
});
