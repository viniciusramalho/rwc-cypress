/// <reference types="cypress" />

import cadastro from '../support/pages/cadastro'

context('Cadastro', () => {
    it('Cadastrar um novo usuário', () => {
        //Preparação
        cadastro.acessarCadastro()

        //Ação
        cadastro.preencherDados()

        //Verificação
        cadastro.verificarSeOCadastroFoiEfetuadoComSucesso()
    });
});