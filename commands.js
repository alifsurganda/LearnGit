// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add("login", (username, password) => {  //2. ===============> ganti nama 'tugas55' supaya lebih unik, misal 'login' (karena kita akan panggil custom commands ini di file tugas55.js)
  cy.clearCookies();
  cy.clearLocalStorage();
  cy.get("#user_login").clear();
  cy.get("#user_login").type(username);

  cy.get('input[name="user_password"]').clear();
  cy.get('input[name="user_password"]').type(password);
  cy.get("#user_remember_me").should("have.prop", "checked");
  cy.get(".btn-primary").click();
});



