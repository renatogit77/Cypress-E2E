/// <reference types="cypress" />

describe('Teste de seleção de comidas favoritas', () => {
    beforeEach(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })

    const comidas = ['carne', 'frango', 'pizza', 'vegetariano']
    comidas.forEach(comida => {
        it(`Cadastro com a comida ${comida}`, () => {
            cy.get('#formNome').type('Usuário')
            cy.get('#formSobrenome').type('Qualquer')
            cy.get('#formSexoFem').click()
            cy.get(`input[value="${comida}"]`).check()
            cy.get('#formEscolaridade').select('Especializacao')
            cy.get('#formEsportes').select('Karate')
            cy.get('#formCadastrar').click()
            cy.get('#resultado > span').should('contain', 'Cadastrado!')
        })

    }) 

    it('Deve selecionar todas as comidas com exceção de vegetariano', () => {
        //uso do each
        cy.get('#formNome').type('Usuário')
            cy.get('#formSobrenome').type('Qualquer')
            cy.get('#formSexoFem').click()
            cy.get('[name=formComidaFavorita]').each($el => {
                if($el.val() !== 'vegetariano')
                    cy.wrap($el).click()
            })
            cy.get('#formEscolaridade').select('Especializacao')
            cy.get('#formEsportes').select('Karate')
            cy.get('#formCadastrar').click()
            cy.get('#resultado > span').should('contain', 'Cadastrado!')

    })

})