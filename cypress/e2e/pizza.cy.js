/// <reference types="Cypress" />
describe("Pizza Sipariş Sayfası", () => {
  beforeEach("site visit", () => {
    cy.visit("http://localhost:5173/");
  });

  it("home page title should be visible", () => {
    cy.contains("KOD ACIKTIRIR").should("be.visible");
  });
  it("order page and form elements work peoperly", () => {
    cy.get('[data-cy="order-button"]').click();
    cy.get('[data-cy="pizza-info"]').should("exist");

    cy.get('[data-cy="Medium-size-input"]').check({ force: true });
    cy.get('[data-cy="dough-select"]').select("normal");
    cy.get('[data-cy="topping-input"]').check(
      ["Pepperoni", "Domates", "Jalepeno", "Ananas"],
      { force: true },
    );
    cy.get('[data-cy="name-input"]').type("exampleName");
    cy.get('[data-cy="increase-button"]').click();
    cy.get('[data-cy="submit-button"]').click();
    cy.url().should("include", "/success");
    cy.contains("lezzetin yolda").should("exist");
    cy.contains("211").should("exist");
  });
  it("show error messages and disabled button", () => {
    cy.get('[data-cy="order-button"]').click();

    cy.get('[data-cy="name-input"]').type("Ad");
    cy.contains("İsim en az 3 karakter olmalıdır.").should("be.visible");
    cy.get('[data-cy="submit-button"]').should("be.disabled");

    cy.get('[data-cy="topping-input"]').check(
      ["Pepperoni", "Domates", "Mısır"],
      { force: true },
    );
    cy.contains("En az 4, en fazla 10 malzeme seçmelisiniz.").should(
      "be.visible",
    );
    cy.get('[data-cy="submit-button"]').should("be.disabled");

    cy.get('[data-cy="name-input"]').clear().type("Doğru İsim");
    cy.get('[data-cy="submit-button"]').should("be.disabled");

    cy.get('[data-cy="Medium-size-input"]').check({ force: true });
    cy.get('[data-cy="dough-select"]').select("normal");

    cy.get('[data-cy="topping-input"]').check(["Jalepeno"], { force: true });
    cy.get('[data-cy="submit-button"]').should("not.be.disabled");
  });
});
