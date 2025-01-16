/// <reference types="cypress" />

describe('Cypress basics', () => {
    it.only('Should visit a page and asser title', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.title().should('be.equal', 'Campo de Treinamento')
        //Outras formas de validar, abaixo:
        cy.title().should('contain', 'Campo')
        cy.title()
           .should('be.equal', 'Campo de Treinamento')
           .and('contain', 'Campo')
        
        cy.title().then(title => {
            console.log(title)

            cy.get('#formNome').type(title)
        })
    })


    it('Should find and interact with an element', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.get('#buttonSimple')
            .click()
            .should('have.value', 'Obrigado!')
    })
})