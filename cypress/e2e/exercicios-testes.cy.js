describe('Teste de páginas no Adopet', () => {
    beforeEach(()=> {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    
    })

    // Exercício 1

  it('Deve clicar no botão Ver pets disponíveis para adoção', () => {
    cy.get('.button').click();
    
});

  it("Deve testar o botão de home", () => {
    cy.get('.header__home').click();
       
  });

  it("Deve testar o botão de mensagens", () => {
    cy.get('.header__message').click();
       
  });

  it("Visita a página de /login do Adopet", () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/login');
       
  });

  it("Visita a página de /home do Adopet", () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/home');
       
  });

  it("Visita a página de /home do Adopet e clica no botão Falar com responsável", () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/home');
    cy.get('.header__message').click();
       
  });

      // Exercício 2
  
  it('Visita a página principal e verifica se o title com o texto adopet está presente', () => {
      cy.title().should('eq', 'AdoPet');
    
  });

      // Exercício 3
  
  it('Visita a página principal e verifica se o texto Quem ama adota! está presente', () => {
      cy.contains('p', 'Quem ama adota!').should('be.visible');
    
  });

        // Exercício 4
  
  it('Visita a página principal e verifica se o texto Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente! está presente', () => {
      cy.contains('p', 'Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!').should('be.visible');
    
  });

        // Exercício 5
  it("Clica no botão Falar com responsável e inseri dados de login corretos", () => {
    cy.get('.header__message').click();
    cy.get('[data-test="input-loginEmail"]').type('ana@email.com');
    cy.get('[data-test="input-loginPassword"]').type('Senha123');
    cy.get('[data-test="submit-button"]').click();
  
  });

})

