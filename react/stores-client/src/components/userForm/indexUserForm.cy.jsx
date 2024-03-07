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
    userForm.get("[data-cy=dialog-body]").should('not.exist');
  });
});
