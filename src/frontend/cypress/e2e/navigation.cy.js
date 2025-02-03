// cypress/e2e/header_spec.js

describe('Pruebas de navegación en el Header', () => {

  it('Debe navegar correctamente a la página de Inicio', () => {
    cy.visit('/');  // Asegúrate de que la URL base esté configurada correctamente
    cy.contains('Inicio').click();  // Hace clic en el enlace de Inicio
    cy.url().should('eq', 'http://localhost:3000/');  // Verifica que la URL sea la correcta
  });

  it('Debe navegar correctamente a la página Acerca de', () => {
    cy.visit('/');
    cy.contains('Acerca de').click();  // Hace clic en el enlace de Acerca de
    cy.url().should('eq', 'http://localhost:3000/about');  // Verifica que la URL sea la correcta
  });

  it('Debe navegar correctamente a la página de Servicios', () => {
    cy.visit('/');
    cy.contains('Servicios').click();  // Hace clic en el enlace de Servicios
    cy.url().should('eq', 'http://localhost:3000/services');  // Verifica que la URL sea la correcta
  });

  it('Debe navegar correctamente a la página de Contacto', () => {
    cy.visit('/');
    cy.contains('Contacto').click();  // Hace clic en el enlace de Contacto
    cy.url().should('eq', 'http://localhost:3000/contact');  // Verifica que la URL sea la correcta
  });

});
