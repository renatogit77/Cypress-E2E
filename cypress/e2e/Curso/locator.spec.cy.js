/// <reference types="cypress" />

describe('Work with basic elements', () => {
    beforeEach(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })

    beforeEach(() =>{
      cy.reload()
    })

    it('Testando jquery selector', () => {
        cy.get('table#tabelaUsuarios tbody > tr:eq(0) td:nth-child(3) > input').click()
        cy.get("[onclick*='Francisco']").click()
        cy.get("[onclick*='Usuario B']").click()
        cy.get('#tabelaUsuarios tr:nth-child(2) td:last-child > input')
          
        cy.get('#tabelaUsuarios td:contains(\'Doutorado\'):eq(0) ~ td:eq(3) > input')
        cy.get('#tabelaUsuarios tr:contains(\'Doutorado\'):eq(0) td:eq(6) > input')
        cy.get('#tabelaUsuarios tr:eq(9) td:eq(6) > input').type('teste cypress')
        cy.get('#tabelaUsuarios tr:eq(9) table tr:eq(0) td:eq(0) > input').click()

    })

})