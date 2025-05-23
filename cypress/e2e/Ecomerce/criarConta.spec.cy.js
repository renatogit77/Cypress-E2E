/// <reference types="cypress" />

describe('Criação de conta de usuário', () => {
    beforeEach(() => {
        cy.visit('http://www.automationpractice.pl/index.php')
    })

    beforeEach(() =>{
      cy.reload()
    })

    it('Cria uma nova conta de usuário', () => {
        cy.get('.login').click()
        cy.get('#email_create').type('vini@uol.com.br')
        cy.get('#SubmitCreate').click()
        cy.get('#id_gender1').click()
          .should('be.checked')
        cy.get('#customer_firstname').type('vini')
        cy.get('#customer_firstname').should('have.value', 'vini')
        cy.get('#customer_lastname').type('Silva')
        cy.get('#customer_lastname').should('have.value', 'Silva')
        cy.get('#email').should('have.value', 'vini@uol.com.br')
        cy.get('#passwd').type('q1w2e3r4')
        cy.get('#passwd').should('have.value', 'q1w2e3r4')
        cy.get('#days').select('17').should('have.value', '17')
        cy.get('#months').select('3').should('have.value', '3')
        cy.get('#years').select('1977').should('have.value', '1977')
        cy.get('#submitAccount').click()
        cy.contains('.alert.alert-success', 'Your account has been created.')
          .should('be.visible');

    })

    it('Acessa área de contato', () => {
        cy.get('[href="http://www.automationpractice.pl/index.php?controller=contact"]').click()
    })
})