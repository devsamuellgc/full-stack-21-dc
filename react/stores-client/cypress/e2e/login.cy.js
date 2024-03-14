describe("Fluxo login", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5174/login");
  });

  it("Should be able to login and redirect to home", () => {
    cy.get("[data-cy=trigger-button]").click();
    cy.get("[data-cy=dialog-body]").should("be.visible");
    cy.get("[data-cy=input-name").type("teste");
    cy.get("[data-cy=input-name").should("have.value", "teste");
    cy.get("[data-cy=btn-submit").click();
    cy.location("pathname").should("eq", "/");
  });

  
});
