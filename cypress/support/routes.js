class Routes {

    as = {
        postArticles: 'POSTArticles',
        getArticlesTitle: 'GETArticlesTitle',
        getArticlesTitleComments: 'GETArticlesComments',
        getFeed: 'GETFeed'
    }

    init(){
        cy.server()
        cy.route('POST', '**articles').as(this.as.postArticles);
        cy.route('GET', '**/articles/teste-**').as(this.as.getArticlesTitle);
        cy.route('GET', '**/articles/teste-**/comments').as(this.as.getArticlesTitleComments);
        cy.route('GET', '**/articles/feed**').as(this.as.getFeed);
    }
}

export default new Routes()