/// <reference types="cypress" />

describe('DemoQA Tools', () => {
  context('Elements Text box', () => {
    it('Deve preencher formulário de cadastro', () => {
      cy.visit('https://demoqa.com/text-box')
      cy.get('#userName').type('Leandro')
      cy.get('#userEmail').type('teste@uol.com.br')
      cy.get('[placeholder="Current Address"]').type('Rua Itamteste, 1000')
      cy.get('#permanentAddress.form-control').type('teste')
      cy.get('#submit').click()

      cy.get('#name').should('contain', 'Leandro')
      cy.get('#email').should('contain', 'teste@uol.com.br')
      cy.get('#currentAddress.mb-1').should('contain', 'Rua Itamteste, 1000')
      cy.get('#permanentAddress.mb-1').should('contain', 'teste')
    })
  })

  describe('Elements Check Box', () => {
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

  describe('Elements Radio Button', () => {
    it('Deve validar Radio button', () => {
      cy.visit('https://demoqa.com/radio-button')
      cy.get('#yesRadio').click()
      cy.get('.mt-3').should('be.visible') // Verifica se o texto é visível
        .and('contain.text', 'You have selected') // Verifica a presença do texto base
        .find('.text-success') // Localiza o elemento que contém o texto "Yes"
        .should('have.text', 'Yes'); // Verifica que o texto específico é "Yes"

    })
  })

  describe('Elements Tables', () => {
    it('Adiciona linha e edita dados na tabela', () => {
      cy.visit('https://demoqa.com/webtables')
      cy.get('#addNewRecordButton').click()
      cy.get('#firstName').type('Leandro')
      cy.get('#lastName').type('Silva')
      cy.get('#userEmail').type('leandro.silva@uol.com.br')
      cy.get('#age').type('45')
      cy.get('#salary').type('5000')
      cy.get('#department').type('Desenvolvedor', { force: true });
      cy.contains('Submit').click({ force: true });
      cy.get('.rt-tr-group').eq(3).find('.rt-td').eq(0).should('have.text', 'Leandro');
      cy.get('.rt-tr-group').eq(3).find('.rt-td').eq(1).should('have.text', 'Silva');
      cy.get('.rt-tr-group').eq(3).find('.rt-td').eq(2).should('have.text', '45');
      cy.get('.rt-tr-group').eq(3).find('.rt-td').eq(3).should('have.text', 'leandro.silva@uol.com.br');
      cy.get('.rt-tr-group').eq(3).find('.rt-td').eq(4).should('have.text', '5000');
      cy.get('.rt-tr-group').eq(3).find('.rt-td').eq(5).should('have.text', 'Desenvolvedor');

      cy.get('.rt-tr-group').eq(3).find('[title="Edit"]').click();
      cy.get('#firstName').clear().type('Pedro')
      cy.get('#lastName').clear().type('Almeida')
      cy.get('#userEmail').clear().type('pedro.almeida@gmail.com')
      cy.get('#age').clear().type('48')
      cy.get('#salary').clear().type('7000')
      cy.get('#department').clear({ force: true }).type('Analista de Qualidade', { force: true });
      cy.contains('Submit').click({ force: true });
      cy.get('.rt-tr-group').eq(3).find('.rt-td').eq(0).should('have.text', 'Pedro');
      cy.get('.rt-tr-group').eq(3).find('.rt-td').eq(1).should('have.text', 'Almeida');
      cy.get('.rt-tr-group').eq(3).find('.rt-td').eq(2).should('have.text', '48');
      cy.get('.rt-tr-group').eq(3).find('.rt-td').eq(3).should('have.text', 'pedro.almeida@gmail.com');
      cy.get('.rt-tr-group').eq(3).find('.rt-td').eq(4).should('have.text', '7000');
      cy.get('.rt-tr-group').eq(3).find('.rt-td').eq(5).should('have.text', 'Analista de Qualidade');

    })
  })

  describe('Widgets', () => {
    beforeEach(() => {
      cy.visit('https://demoqa.com/tabs')
    })
    context('Tab What', () => {
      it('Iteragindo com Tabs', () => {
        cy.get('#demo-tab-what')
        cy.get('#demo-tabpane-what')
          .should('be.visible')
          .find('p.mt-3')
          .should('contain.text', 'Lorem Ipsum is simply dummy text')
  
    })

    context('Tab Origin', () => {
      it('Iteragindo com Tabs', () => {
        cy.get('#demo-tab-origin').click() // Clica na aba
     // Espera o painel associado aparecer e, só então, verifica o conteúdo
        cy.get('#demo-tabpane-origin')
        .should('be.visible')
        .find('p.mt-3')
        .should('contain.text', 'Contrary to popular belief, Lorem Ipsum is not simply random text.')
     })
   })
    context('Tab Use', () => {
      it('Iteragindo com Tabs', () => {
        cy.get('#demo-tab-use').click()
        // Espera o painel associado aparecer e, só então, verifica o conteúdo
        cy.get('#demo-tabpane-use')
          .should('be.visible')
          .find('p.mt-3')
          .should('contain.text', 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.')
      })
    })

  })
 })
})

