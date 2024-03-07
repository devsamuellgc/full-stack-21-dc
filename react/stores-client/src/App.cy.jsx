import React from "react";
import App from "./App";
import { useApp } from "./useApp";

describe("Testando o componente App", () => {
  it("O componente deverá renderizar ao iniciar a página", () => {
    cy.mount(<App />);
  });

  it("Deverá existir um título no componente", () => {
    const app = cy.mount(<App />);
    app
      .get("[data-cy=title]")
      .should("have.text", "Um texto para testar o teste");
  });

  it("O cálculo deverá retornar um número", () => {
    const { sum } = useApp();
    const soma = sum(5, 8);
    expect(soma).to.equal(13);
  });

  it("O array deverá ter 3 itens", () => {
    const arr = [1, 2, 3];
    expect(arr).to.have.lengthOf(3);
  });

  it("O nome alterado deverá ser igual ao nome atual", () => {
    const { handleNewName } = useApp();
    const newName = handleNewName("Samuel");
    expect("Samuel").to.equal(newName);
  });

  it("Nome alterado no componente", () => {
    const app = cy.mount(<App />);
    app.get("[data-cy=initial-text]").should("have.text", "");
    app.get("[data-cy=final-text]").should("have.text", "");
    app.get("[data-cy=change-name]").click();
    app.get("[data-cy=initial-text]").should("have.text", "Samuel");
    app.get("[data-cy=final-text]").should("have.text", "Samuel");
  });
});
