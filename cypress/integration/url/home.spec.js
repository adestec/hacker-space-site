describe('Teste para verificar se a url do home está ok', () => {
    it('Visitar págima home', () => {
      cy.visit('localhost:8000')
    })
  })
  describe('Teste para verificar se a url do home está ok', () => {
    it('Visitar página services', () => {
      cy.visit('localhost:8000/services')
    })
  })
  describe('Teste para verificar se a url de planos esta ok', () => {
    it('Visitar página services', () => {
      cy.visit('localhost:8000/membership-levels')
    })
  })