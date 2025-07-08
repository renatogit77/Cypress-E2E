Cypress.Commands.add('getToken', (user, passwd) => {
    cy.request({
        method: 'POST',
        url: '/signin',
        body: {
            email: user,
            redirecionar: false,
            senha: passwd
        }
    }).its('body.token').should('not.be.empty')
        .then(token => {
            return token
        });
});

Cypress.Commands.add('resetRest', () => {
    cy.getToken(Cypress.env('user'), Cypress.env('passwd'))
        .then(token => {
            cy.request({
                method: 'GET',
                url: '/reset',
                headers: {
                    Authorization: `JWT ${token}`
                }
            }).then(res => {
                expect(res.status).to.eq(200);
                console.log('[resetRest] Reset concluído com sucesso.');
            });
        });
    });