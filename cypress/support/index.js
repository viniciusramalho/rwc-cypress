// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************
Cypress.Commands.add('backgroundLogin', () => {
    
    // Processo de login em background
    //1. Realizar uma requisição do tipo POST com email e senha - linha 22~32
    //2. capturar o token que é recebido da nossa requisição - linha 33
    //3. usar o token recebido para salvar no localstorage - linha 35

    cy.request({
        method: 'POST',
        url: `${Cypress.config().apiUrl}users/login`,
        body:{
            user:{
                email: "teste11111@mail.com",
                password: "123123123"
            }
        }
    }).then((loginResponse) => {
        console.log(loginResponse.body)
        cy.log(loginResponse.body.user.token)

        cy.visit('editor', {
            onBeforeLoad: (win) => {
                win.localStorage.setItem('jwtToken', loginResponse.body.user.token)
            }
        });
    })
})

import Routes from '../support/routes'

before(() => {
    Routes.init()
})