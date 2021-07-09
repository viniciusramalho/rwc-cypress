/// <reference types="cypress" />

import articles from '../support/pages/articles'

context('Artigos', () => {
    //Preparação
    beforeEach(() => {
        cy.backgroundLogin()
        articles.acessarFormularioDeNovaPublicacao()   
    });

    it('Criar um novo artigo', () => {
        //Ação
        articles.preencherFormulario()
        articles.submeterPublicacao()

        //Verificação
        articles.verificarSeAPuclicacaoFoiCadastradaComSucesso()
    });
});