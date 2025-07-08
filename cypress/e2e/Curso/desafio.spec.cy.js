/// <reference types="cypress" />

describe('Work with alerts', () => {
    beforeEach(() => {
        cy.visit('http://wcaquino.me/cypress/componentes.html')
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
        cy.get('#formNome').type('Harry')
        cy.get('#formNome').should('have.value', 'Harry')
    })

    it('Preenche campo sobrenome', () => {
        cy.get('#formSobrenome').type('Potter')
        cy.get('#formSobrenome').should('have.value', 'Potter')
    })

    it('Selecionao sexo', () => {
        cy.get('#formSexoFem')
          .click()
          .should('be.checked')

        cy.get('#formSexoMasc')
          .should('not.be.checked')
    })

    it('Valida cadastro', () => {
        cy.get('#formNome').type('Harry')
        cy.get('#formNome').should('have.value', 'Harry')

        cy.get('#formSobrenome').type('Potter')
        cy.get('#formSobrenome').should('have.value', 'Potter')

        cy.get('#formSexoFem')
        .click()
        .should('be.checked')

      cy.get('#formSexoMasc')
        .should('not.be.checked')

        cy.get('#formCadastrar').click()
        cy.get('#resultado > span').should('contain', 'Cadastrado!')
    })
})