/// <reference types="cypress" />

describe('Work with alerts', () => {
    beforeEach(() => {
        
    })

    beforeEach(() =>{
      
    })

    //Esta é a forma de enviar um requisição POST para recuperar o token de acesso
    it('Should create an account', () => {
        cy.request({
            method: 'POST',
            url: 'https://barrigarest.wcaquino.me/signin',
            body: {
                email: "harveyhodgson0@gmail.com",
                redirecionar: false,
                senha: "7\"Eh*v:HeZ]]Y@gi"
            }
        }).its('body.token').should('not.be.empty')
          .then(token => {
            cy.request({
                url: 'https://barrigarest.wcaquino.me/contas',
                method: 'POST',
                headers: {Authorization: 'JWT ${token}'},
                body: {
                    nome: 'Conta via rest'
                }
            }).then(res => console.log(res))
        })        
    })
})