describe('Fluxo de Login', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
    })
   
    //Exercício 4
    it('Verifica mensagem de texto', () =>{
        cy.get('.header__message').click();
        cy.login('ana@email.com','Senha123');    
    })

     //Exercício 5
      it('Verifica imagens dos animais', () =>{
        cy.visit('https://adopet-frontend-cypress.vercel.app/home');
        cy.get('.cards').should('be.visible');
      
    })
 });