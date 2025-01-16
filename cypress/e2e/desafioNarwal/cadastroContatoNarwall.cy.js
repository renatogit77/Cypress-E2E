/// <reference types="cypress" />

import loc from '../../support/locators_NarwalBecomex'
import loca from '../../support/locatorsN'

//Acessa a página de cadastro de contato
describe("Dado que o usuário acessa o site", () => {
  beforeEach(() => {
    cy.visit("https://www.narwalsistemas.com.br/contato/", { timeout: 30000 });
    cy.get(
      loc.POPUP.CLOSE
    ).click();
  });

  //Valida se os campos obrigatórios foram preenchidos
  it("Então envio o formulário sem preencher nenhum campo texto", () => {
    cy.get(loca.BOTAO.ENVIAR).click();
    cy.get(loca.MSN_ERRO.CPNOME)
      .should('be.visible')
      .should('contain.text', 'Este campo é obrigatório.');
      
    cy.get(loca.MSN_ERRO.CPMAIL)
      .should('be.visible')
      .should('contain.text', 'Este campo é obrigatório.');
    
    cy.get(loca.MSN_ERRO.CPFONE)
      .should('be.visible')
      .should('contain.text', 'Este campo é obrigatório.');
  
      cy.get(loca.MSN_ERRO.CPEMPR)
      .should('be.visible')
      .should('contain.text', 'Este campo é obrigatório.');
    
  });

  

  //Preenche os campos do formulário e envia
  it("E preencho todos os campos do formulário e envio", () => {
    cy.get(loca.CAMPO.NOME)
      .type("Nome Fake")
      .should("have.value", "Nome Fake");
    cy.get(loca.CAMPO.EMAIL)
      .type("email@fake.com")
      .should("have.value", "email@fake.com");
    cy.get(loca.CAMPO.FONE)
      .type("47887087805")
      .should("have.value", "47887087805");
    cy.get(loca.CAMPO.EMPR)
      .type("Empresa Fake")
      .should("have.value", "Empresa Fake");
    cy.get(loca.CAMPO.SEG)
      .select("Exportação")
      .should("have.value", "Exportação");
    cy.get(loca.CAMPO.OPER)
      .select("Não")
      .should("have.value", "Não");
    cy.get(loca.CAMPO.ERP)
      .select("TOTVS")
      .should("have.value", "TOTVS");
    cy.get(loca.BOTAO.ENVIAR).click();
    cy.get(loca.MSN_SUCESSO.SUCESSO)
      .should("be.visible")
      .should('contain.text', 'Obrigado por nos contatar! Entraremos em contato em breve.'
      );
  });
});
