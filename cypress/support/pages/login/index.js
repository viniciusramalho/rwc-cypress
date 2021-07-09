const el = require('../../common-elements').COMMONELEMENTS
import routes from '../../routes'

class Login {

    acessarLogin(){
        cy.visit('login');
    }

    preencherFormulario(){
        cy.get(el.inputEmail).type(Cypress.config().user.email);
        cy.get(el.inputPassword).type(Cypress.config().user.password);
    }

    submeterFormulario(){
        cy.get(el.buttonSubmit).click();
    }

    verificarSeOLoginFoiEfetuadoComSucesso(){
        cy.wait(`@${routes.as.getFeed}`).then((getFeed) => {
            expect(getFeed.status).to.eq(200)
        })
    }
}

export default new Login();