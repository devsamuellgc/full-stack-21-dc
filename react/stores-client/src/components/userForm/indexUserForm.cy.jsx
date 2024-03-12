import React from "react";
import { UserForm } from "./index";

describe("<UserForm />", () => {
  it("renders", () => {
    cy.mount(<UserForm />);
  });

  it("Open modal on click", () => {
    const userForm = cy.mount(<UserForm />);
    userForm.get("[data-cy=trigger-button]").click();
    userForm.get("[data-cy=dialog-body]").should("be.visible");
  });

  it("Should close modal on confirm button", () => {
    const userForm = cy.mount(<UserForm />);
    userForm.get("[data-cy=trigger-button]").click();
    userForm.get("[data-cy=dialog-body]").should("be.visible");
    userForm.get("[data-cy=close-dialog]").click();
    userForm.get("[data-cy=dialog-body]").should("not.exist");
  });

  it("Should change input value on onchange function", () => {
    const userForm = cy.mount(<UserForm />);
    userForm.get("[data-cy=trigger-button]").click();
    userForm.get("[data-cy=dialog-body]").should("be.visible");
    userForm.get("[data-cy=input-name").type("teste");
    userForm.get("[data-cy=input-name").should("have.value", "teste");
    userForm.get("[data-cy=close-dialog]").click();
    userForm.get("[data-cy=dialog-body]").should("not.exist");
  });

  it("Should redirect to home page after submit form", () => {
    const userForm = cy.mount(<UserForm />);
    userForm.get("[data-cy=trigger-button]").click();
    userForm.get("[data-cy=dialog-body]").should("be.visible");
    userForm.get("[data-cy=input-name").type("teste");
    userForm.get("[data-cy=input-name").should("have.value", "teste");
    userForm.get("[data-cy=btn-submit").click();
    cy.location("pathname").should("eq", "/");
  });
});
