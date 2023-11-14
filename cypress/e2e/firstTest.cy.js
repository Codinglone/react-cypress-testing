describe('cypress demo', () => {
  it('renders the default elements on the screen', () => {
    cy.visit('http://localhost:5173')

    cy.get('[data-testid="cypress-title"]').should('exist')
    .should('have.text', 'Cypress demo')
    ;
  });
  
  it("renders the todos on the screen", () => {
    cy.visit('http://localhost:5173')

    cy.get('[data-testid="todo-1"]').should('exist')
    .should('have.text', 'Learn Testing with cypress')
    cy.get('[data-testid="todo-2"]').should('exist')
    .should('have.text', 'Learn AI fundamentals')
    cy.get('[data-testid="todo-3"]').should('exist')
    .should('have.text', 'Watch a movie')
  })

  it("renders a reload button on the screen", () => {
    cy.visit('http://localhost:5173')

    cy.get('[data-testid="cypress-button"]').should('exist')
    .should('have.text', 'Reload')
  })
})