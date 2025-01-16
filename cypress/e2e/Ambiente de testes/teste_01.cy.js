/// <reference types="cypress" />

describe('Preenche formulário', () => {
    it('Deve preencher formulário de cadastro', () => {
        cy.visit('https://demoqa.com/text-box')
        cy.get('#userName').type('Leandro')
        cy.get('#userEmail').type('teste@uol.com.br')
        cy.get('[placeholder="Current Address"]').type('Rua Itambé, 744')
        cy.get('#permanentAddress.form-control').type('teste')
        cy.get('#submit').click()

        cy.get('#name').should('contain', 'Leandro')
        cy.get('#email').should('contain', 'teste@uol.com.br')
        cy.get('#currentAddress.mb-1').should('contain', 'Rua Itambé, 744')
        cy.get('#permanentAddress.mb-1').should('contain', 'teste')

    })

    describe('Seleciona Check Box', () => {
         beforeEach(() => {
            cy.visit('https://demoqa.com/checkbox')
        })
      
        it('Deve selecionar a check box Desktop', () => {
            cy.get('[class="rct-collapse rct-collapse-btn"]')
              .click()
            cy.get('#tree-node li:nth-child(1) > span > button [class="rct-icon rct-icon-expand-close"]')
              .click()
            cy.get('#tree-node-desktop ~ .rct-checkbox > svg')
              .click()
            cy.get('#tree-node-notes') // Localize o input novamente pelo ID
              .should('be.checked'); 
            cy.get('#tree-node-commands') // Localize o input novamente pelo ID
              .should('be.checked'); 
        })

        it('Deve selecionar a check box Documents', () => {
            cy.get('[class="rct-collapse rct-collapse-btn"]')
              .click()
            cy.get('#tree-node li:nth-child(2) > span > button [class="rct-icon rct-icon-expand-close"]')
              .click()
              cy.get('#tree-node-documents ~ .rct-checkbox > svg')
              .click()
            cy.get('#tree-node-workspace') // Localize o input novamente pelo ID
              .should('be.checked')
            cy.get('#tree-node-office') // Localize o input novamente pelo ID
              .should('be.checked') 

        })

        it('Deve selecionar a check box Donwload', () => {
          cy.get('[class="rct-collapse rct-collapse-btn"]')
            .click()
          cy.get('#tree-node li:nth-child(3) > span > button [class="rct-icon rct-icon-expand-close"]')
            .click()
            cy.get('#tree-node-downloads ~ .rct-checkbox > svg')
            .click()
          cy.get('#tree-node-wordFile') // Localize o input novamente pelo ID
            .should('be.checked')
          cy.get('#tree-node-excelFile') // Localize o input novamente pelo ID
            .should('be.checked') 

      })
    })

    it('Deve validar Radio button', () => {
      cy.visit('https://demoqa.com/radio-button')
      cy.get('#yesRadio').click()
      cy.get('.mt-3').should('be.visible') // Verifica se o texto é visível
      .and('contain.text', 'You have selected') // Verifica a presença do texto base
      .find('.text-success') // Localiza o elemento que contém o texto "Yes"
      .should('have.text', 'Yes'); // Verifica que o texto específico é "Yes"

    })
})

    


   