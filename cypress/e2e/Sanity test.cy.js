///<reference types = "Cypress"/>
const baseUrl = 'https://consumersenergymanagement.ca';

describe('Sanity Test - Consumers Energy Management', () => {
    it('Should navigate to the Home page and verify the URL and title', () => {
    cy.visit(baseUrl);
    cy.get('#menu-item-31 > a').click();
    cy.url().should('include', '/');
    cy.get('h1').should('contain.text', 'About Consumers Energy Management Inc.');
  });

  it('Should navigate to the About Us page and verify the URL and title', () => {
    cy.visit(baseUrl);
    cy.get('#menu-item-36 > a').click();
    cy.url().should('include', '/');
    cy.get('h1').should('contain.text', 'About Consumers Energy Management Inc.');
  });

  it('Should navigate to the Products page and verify the URL and title', () => {
    cy.visit(baseUrl);
    cy.get('#menu-item-32 > [href="products/"]').click();
    cy.url().should('include', '/');
    cy.get('h1').should('contain.text', 'Products');
  }); 

   it('Should navigate to the Services page and verify the URL and title', () => {
    cy.visit(baseUrl);
    cy.get('#menu-item-34 > [href="services/"]').click();
    cy.url().should('include', '/');
    cy.get('h1').should('contain.text', 'Services');
  }); 

   it('Should navigate to the Tools page and verify the URL and title', () => {
    cy.visit(baseUrl);
    cy.get('#menu-item-35 > [href="tools-resources/"]').click();
    cy.url().should('include', '/');
    cy.get('h1').should('contain.text', 'Tools & Resources');
  }); 

  it('Should navigate to the Promotions page and verify the URL and title', () => {
    cy.visit(baseUrl);
    cy.get('#menu-item-673 > a').click();
    cy.url().should('include', '/');
    cy.get('h1').should('contain.text', 'Promotions');
  }); 

    it('Should navigate to the Careers page and verify the URL and title', () => {
    cy.visit(baseUrl);
    cy.get('#menu-item-1589 > a').click();
    cy.url().should('include', '/');
    cy.get('h1').should('contain.text', 'Careers');
  });  

   it('Should navigate to the Blog page and verify the URL and title', () => {
    cy.visit(baseUrl);
    cy.get('#menu-item-1725 > a').click();
    cy.url().should('include', '/');
    cy.get('h1').should('contain.text', 'Blog');
  });  

   it('Should navigate to the FAQs page and verify the URL and title', () => {
    cy.visit(baseUrl);
    cy.get('#menu-item-1727 > a').click();
    cy.url().should('include', '/');
    cy.get('h1').should('contain.text', 'Frequently Asked Questions');
  });  

  it('Should navigate to the Contact page and verify the URL and title', () => {
    cy.visit(baseUrl);
    cy.get('#menu-item-1726 > a').click();
    cy.url().should('include', '/');
    cy.get('h1').should('contain.text', 'Contact Us');
  }); 




});