/// <reference types="cypress" />

describe('Work with alerts', () => {
    beforeEach(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })

    beforeEach(() =>{
      cy.reload()
    })

    it('Valida botão cadastrar', () => {
        cy.get('#formCadastrar').click()
        cy.on('window:alert', msg => {
            console.log(msg)
            expect(msg).to.be.equal('Nome eh obrigatorio')
        })
    })

    it('Preenche campo nome', () => {
        cy.get('#formNome').type('Renato')
        cy.get('#formNome').should('have.value', 'Renato')
    })

    it('Preenche campo sobrenome', () => {
        cy.get('#formSobrenome').type('Rumor')
        cy.get('#formSobrenome').should('have.value', 'Rumor')
    })

    it('Selecionao sexo', () => {
        cy.get('#formSexoFem')
          .click()
          .should('be.checked')

        cy.get('#formSexoMasc')
          .should('not.be.checked')
    })

    it('Valida cadastro', () => {
        cy.get('#formNome').type('Renato')
        cy.get('#formNome').should('have.value', 'Renato')

        cy.get('#formSobrenome').type('Trouxa')
        cy.get('#formSobrenome').should('have.value', 'Trouxa')

        cy.get('#formSexoFem')
        .click()
        .should('be.checked')

      cy.get('#formSexoMasc')
        .should('not.be.checked')

        cy.get('#formCadastrar').click()
        cy.get('#resultado > span').should('contain', 'Cadastrado!')
    })
})