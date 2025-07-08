/// <reference types="cypress" />

describe('Testes da API Barriga REST', () => {
    context('Cria, edita e deleta contas', () => {
        let token;
        // Obtém o token JWT antes de executar os testes
        // Isso garante que o token esteja disponível para todas as requisições subsequentes
        before(() => {
            cy.getToken(Cypress.env('user'), Cypress.env('passwd'))
                .then(jwtToken => {
                    token = jwtToken;
                });
        })
        beforeEach(() => {
            cy.resetRest();
        });

        it('Deve criar uma nova conta com sucesso', () => {
            cy.request({
                method: 'POST',
                url: '/contas',
                headers: {
                    Authorization: `JWT ${token}`
                },
                body: {
                    nome: 'Conta de Teste Cypress'
                }
            }).as('response')

            cy.get('@response').then((res) => {
                expect(res.status).to.be.equal(201);
                expect(res.body).to.have.property('id');
                expect(res.body).to.have.property('nome', 'Conta de Teste Cypress');
            });
        })

        it('Deve alterar uma conta', () => {
            cy.request({
                method: 'GET',
                url: 'contas/',
                headers: {
                    Authorization: `JWT ${token}`
                },
                qs: {
                    nome: 'Conta para alterar'
                }
            }).then((res) => {
                expect(res.body.length).to.be.greaterThan(0);
                cy.request({
                    method: 'PUT',
                    url: `contas/${res.body[0].id}`, // Usa o ID da conta obtida na requisição anterior
                    headers: {
                        Authorization: `JWT ${token}`
                    },
                    body: {
                        nome: 'Conta Alterada via rest Cypress'
                    }
                }).as('response')
            })

            cy.get('@response').then((res) => {
                expect(res.status).to.be.equal(200);
                expect(res.body).to.have.property('nome', 'Conta Alterada via rest Cypress');
            });
        })

    })
})
