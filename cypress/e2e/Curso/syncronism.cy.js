/// <reference types="cypress" />

describe('Esperas...', () => {
    beforeEach(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })

    it('Deve aguardar elemento estar disponível', () => {
        cy.get('#buttonDelay')
          .click()
        cy.get('#novoCampo')
          .type('Funciona')
    })

    it('Deve fazer retrys', () => {
      cy.get('#novoCampo').should('not.exist')
      cy.get('#buttonDelay').click()
      cy.get('#novoCampo').should('not.exist')
      cy.get('#novoCampo')
        //.shoul('not.exist')
        .should('exist')
        .type('funciona')

    })

    it('Uso do find', () => {
      cy.get('#buttonList').click()
      cy.get('#lista li')
        .find('span')
        .should('contain', 'Item 1')
      cy.get('#lista li span')
        .should('contain', 'Item 2')
    })

    it.only('Uso do timeout', () => {
      //cy.get('#buttonDelay').click()
      //cy.get('#novoCampo', {timeout:1000}).should('exist')

      cy.get('#buttonList').click()
      cy.get('#lista li span', {timeout:30000})
        .should('contain', 'Item 2')
    })

})