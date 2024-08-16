///<reference types="Cypress"/>
const baseUrl = 'https://consumersenergymanagement.ca';

describe('Sanity Test - Consumers Energy Management', () => {
  const pages = [
    { menuItem: '#menu-item-31 > a', title: 'About Consumers Energy Management Inc.' },
    { menuItem: '#menu-item-36 > a', title: 'About Consumers Energy Management Inc.' },
    { menuItem: '#menu-item-32 > [href="products/"]', title: 'Products' },
    { menuItem: '#menu-item-34 > [href="services/"]', title: 'Services' },
    { menuItem: '#menu-item-35 > [href="tools-resources/"]', title: 'Tools & Resources' },
    { menuItem: '#menu-item-673 > a', title: 'Promotions' },
    { menuItem: '#menu-item-1589 > a', title: 'Careers' },
    { menuItem: '#menu-item-1725 > a', title: 'Blog' },
    { menuItem: '#menu-item-1727 > a', title: 'Frequently Asked Questions' },
    { menuItem: '#menu-item-1726 > a', title: 'Contact Us' }
  ];

  pages.forEach(page => {
    it(`Should navigate to the page and verify the title: ${page.title}`, () => {
      cy.visit(baseUrl);
      cy.get(page.menuItem).click();
      cy.url().should('include', '/');
      cy.get('h1').invoke('text').then((text) => {
        expect(text.trim().toLowerCase()).to.include(page.title.toLowerCase());
      });
    });
  });
});
