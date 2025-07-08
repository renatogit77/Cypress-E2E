/// <reference types="cypress" />

/// <reference types="cypress" />

describe('Selecionar TieredMenu com scroll', () => {
  context('Tiered Menu', () => {
    beforeEach(() => {
      // Aumenta o timeout para evitar falhas em conexões mais lentas
      cy.visit('https://www.primefaces.org/showcase/ui/ajax/basic.xhtml', {
        timeout: 60000,
      });
    });

    it('Deve abrir o menu de navegação e clicar em TieredMenu', () => {
      // Aguarda o menu lateral estar visível
      cy.get('div.layout-sidebar', { timeout: 10000 }).should('be.visible');

      // Usa scrollIntoView diretamente no link com o texto "TieredMenu"
      cy.get('div.layout-sidebar a')
        .contains('TieredMenu')
        .scrollIntoView({ duration: 800 })
        .should('be.visible') // Garante que o item está visível antes de clicar
        .click({ force: true });

      // Confirma se redirecionou corretamente
      cy.url().should('include', '/tieredMenu');
    });
  });
});


