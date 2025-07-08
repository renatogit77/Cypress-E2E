/// <reference types="cypress" />

describe('Work with basic elements', () => {
    beforeEach(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })

    beforeEach(() =>{
      cy.reload()
    })

    it('Text', () => {
       
        cy.get('.facilAchar')
        .should('have.text', 'Cuidado onde clica, muitas armadilhas...')
        .should('contain', 'Cuidado')
    })

    it('Links', () => {
       
        cy.get('[href="#"]').click()
        cy.get('#resultado').should('have.text', 'Voltou!')

        cy.reload()
        cy.get('#resultado').should('have.not.text', 'Voltou!' )
        //O uso do contais é similar ao get, porém é recomendado utilizar mais o get
        cy.contains('Voltar').click()
        cy.get('#resultado').should('have.text', 'Voltou!')
    })

    it('Text fields', () => {
        cy.get('#formNome').type('Cypress teste')
        cy.get('#formNome').should('have.value', 'Cypress teste')  
        cy.get('#formSobrenome').type('Preenche sobrenome 12345{backspace}{backspace}') 
          .should('have.value', 'Preenche sobrenome 123')
        cy.get('#elementosForm\\:sugestoes')
          .type('Preenche o campo SUGESTÕES') 
          .should('have.value', 'Preenche o campo SUGESTÕES')
        
        cy.get('#tabelaUsuarios > tbody > tr:nth-child(3) > td:nth-child(6) > input[type="text"]')
          .type('Teste Cypress')
        
        cy.get('#elementosForm\\:sugestoes')
          .clear()
          .type('Erro{selectall}acerto', { delay:150}) 
          .should('have.value', 'acerto')
    
    })

    it('RadioButton', () => {
        cy.get('#formSexoFem')
          .click()
          .should('be.checked')

        cy.get('#formSexoMasc')
          .should('not.be.checked')
    })

    //Seleciona apenas um checkbox
    it('CheckBox', () => {
        cy.get('#formComidaPizza')
          .click()
          .should('be.checked')
     
    //Seleciona vários checkbox          
        cy.get('[name=formComidaFavorita]')
          .click({multiple:true})
        cy.get('#formComidaPizza')
          .should('not.be.checked')
        cy.get('#formComidaCarne')
          .should('be.checked')
        cy.get('#formComidaFrango')
          .should('be.checked')
        cy.get('#formComidaVegetariana')
          .should('be.checked')
    }) 

    it('Combo', () => {
        cy.get('#formEscolaridade')
          .select('2o grau completo')
          .should('have.value', '2graucomp')
        
        cy.get('#formEscolaridade')
          .select('1graucomp')
          .should('have.value', '1graucomp')

        //Teste para verificar a quantidade de opções  
        cy.get('#formEscolaridade option')
          .should('have.length', 8)

        //Teste para verificar as opções existentes, usamos array neste caso  
        cy.get('#formEscolaridade option').then($arr => {
          const values = []
          $arr.each(function() {
               values.push(this.innerHTML)
          })
          expect(values).to.include.members(["Superior", "Mestrado"])
        })
    })

    it('Combo Multiplo', () => {
        cy.get('#formEsportes')
          .select(['natacao', 'Corrida', 'nada']) //seleciona os elementos do combo
         // .should('have.value', 'natacao', 'Corrida', 'nada') Não funciona com should
         //Valida os elementos selecionados
         cy.get('#formEsportes').then($el => {
           expect($el.val()).to.be.deep.equal(['natacao', 'Corrida', 'nada'])
           expect($el.val()).to.have.length(3)
        //usando o invoke
         cy.get('#formEsportes').invoke('val')
           .should('eql', ['natacao', 'Corrida', 'nada'])
         })        
    })
})
