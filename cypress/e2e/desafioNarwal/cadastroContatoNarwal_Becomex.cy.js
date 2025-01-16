/// <reference types="cypress" />

import loc from '../../support/locators_NarwalBecomex'

//Acessa a página de cadastro de contato
describe("Dado que o usuário acessa o site", () => {
  beforeEach(() => {
    cy.visit("https://www.narwalsistemas.com.br/becomex/", { timeout: 30000 });
    //cy.get(
    //  loc.POPUP.CLOSE
    //).click();
  });


  //Preenche o campos de cadastro e valida campo telefone
  it("Então preencho os campos obrigatórios e valido o campo telefone", () => {
    cy.get(loc.FIELDS.NAME)
      .type("FakeName")
      .should("have.value", "FakeName");
    cy.get(loc.FIELDS.FONE).type("47 9999-9999");
    cy.get(loc.FIELDS.MAIL)
      .type("email@fake.com")
      .should("have.value", "email@fake.com");
    cy.get(loc.FIELDS.EMPRESA)
      .type("Empresa Fake")
      .should("have.value", "Empresa Fake");
    cy.get(loc.FIELDS.SEGMENTO)
      .select("Exportador")
      .should("have.value", "Exportador");
    cy.get(loc.CHECKBOX.POLITICA).click().should("be.checked");
    cy.get(loc.BUTTON.CONTINUAR).click();
    cy.get(loc.MESSAGE.FONE_ERROR)
      .should("be.visible")
      .should(
        "contain.text",
        "O Campo Aceita Apenas Números e Caracteres de Telefone (#, -, *, etc)"
      );
  });

  //Preenche o campos de cadastro e valida campo e-mail
  it("Então preencho os campos obrigatórios e valido o campo e-mail", () => {
    cy.get(loc.FIELDS.NAME)
      .type("FakeName")
      .should("have.value", "FakeName");
    cy.get(loc.FIELDS.FONE).type("4799999999");
    cy.get(loc.FIELDS.MAIL)
      .type("email@fake")
      .should("have.value", "email@fake");
    cy.get(loc.FIELDS.EMPRESA)
      .type("Empresa Fake")
      .should("have.value", "Empresa Fake");
    cy.get(loc.FIELDS.SEGMENTO)
      .select("Exportador")
      .should("have.value", "Exportador");
    cy.get(loc.CHECKBOX.POLITICA).click().should("be.checked");
    cy.get(loc.BUTTON.CONTINUAR).click();
    cy.get(loc.MESSAGE.MAIL_ERROR)
      .should("be.visible")
      .should("contain.text", "Este campo é obrigatório.");
  });

  //Preenche os campos do formulário e envia
  it("Em seguida, preencho os campos obrigatórios e envio o formulário", () => {
    cy.get(loc.FIELDS.NAME)
      .type("FakeName")
      .should("have.value", "FakeName");
    cy.get(loc.FIELDS.FONE)
      .type("47999999999")
      .should("have.value", "47999999999");
    cy.get(loc.FIELDS.MAIL)
      .type("email@fake.com")
      .should("have.value", "email@fake.com");
    cy.get(loc.FIELDS.EMPRESA)
      .type("Empresa Fake")
      .should("have.value", "Empresa Fake");
    cy.get(loc.FIELDS.SEGMENTO)
      .select("Exportador")
      .should("have.value", "Exportador");
    cy.get(loc.CHECKBOX.POLITICA).click().should("be.checked");
    cy.get(loc.BUTTON.CONTINUAR).click();
    cy.get(loc.MESSAGE.SUCESSO)
      .should("be.visible")
      .should(
        "contain.text",
        "Enviado com sucesso! em breve entraremos em contato ."
      );
  });
});
