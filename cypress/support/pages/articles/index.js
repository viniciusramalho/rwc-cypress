/// <reference types="cypress" />

const faker = require('faker')

const el = require('./elements').ELEMENTS

import routes from '../../routes'

class Article {

    acessarFormularioDeNovaPublicacao(){    
        // Então clicar em Novo Artigo
        cy.get(el.linkNovaPublicacao).click()
    }

    preencherFormulario(){
        cy.get(el.inputTitle).type('Teste')
        cy.get(el.inputDescription).type('cypress')
        cy.get(el.textAreaContent).type(faker.lorem.paragraph())
        cy.get(el.inputTags).type('cypress')
    }

    submeterPublicacao(){        
        cy.get(el.buttonSubmit).click()
    }

    verificarSeAPuclicacaoFoiCadastradaComSucesso(){
        
        cy.wait(`@${routes.as.postArticles}`).then((postArticlesResponse) => {
            expect(postArticlesResponse.status).to.eq(200)
        })
    
        cy.wait(`@${routes.as.getArticlesTitle}`).then((getArticlesTitleResponse) => {
            expect(getArticlesTitleResponse.status).to.eq(200)
        })
    
        cy.wait(`@${routes.as.getArticlesTitleComments}`).then((getArticlesCommentsResponse) => {
            expect(getArticlesCommentsResponse.status).to.eq(200)
        })
    }
}


export default new Article();