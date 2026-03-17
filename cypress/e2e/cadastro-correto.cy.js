describe('Página de Cadastro', () => {
  beforeEach(() =>{
    cy.visit('https://adopet-frontend-iota.vercel.app/');
    cy.get('[data-test="register-button"]').click();
  })
  
  it('Deve preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {
    cy.cadastrar('Marjorie Anoquevem','marjorie@email.com', 'Senha123')

    //O comando personalizado acima, substitui o bloco de código comentado abaixo realizando a mesma função
    //cy.visit('https://adopet-frontend-cypress.vercel.app/');
    //cy.get('[data-test="register-button"]').click();
    //cy.get('[data-test="input-name"]').type('Ana Maria de Deus');
    //cy.get('[data-test="input-email"]').type('anamd@email.com');
    //cy.get('[data-test="input-password"]').type('Senha123');
    //cy.get('[data-test="input-confirm-password"]').type('Senha123');
    //cy.get('[data-test="submit-button"]').click();
    
  })
})