/// <reference types="cypress" />

const el = require('./elements').ELEMENTS
const cel = require('../../common-elements').COMMONELEMENTS

const faker = require('faker')

import routes from '../../routes'

class Cadastro {
    acessarCadastro(){
        cy.visit('register');
    }

    preencherDados(){
        cy.get(el.inputUsuario).type(faker.name.firstName() + faker.name.lastName())
        
        cy.get(cel.inputEmail).type(faker.internet.email());
        cy.get(cel.inputPassword).type(faker.internet.password());
        
        cy.get(cel.buttonSubmit).click()
    }

    verificarSeOCadastroFoiEfetuadoComSucesso(){
        cy.wait(`@${routes.as.getFeed}`).then((getFeed) => {
            expect(getFeed.status).to.eq(200)
        })
    }
}

export default new Cadastro()