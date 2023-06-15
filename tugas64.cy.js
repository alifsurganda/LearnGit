/// <reference types="cypress" />

describe('Tugas 64', function () {
	before(() => {
		cy.visit('http://zero.webappsecurity.com/index.html')
	})

	it('Should displat online banking content', () => {
		cy.get('#onlineBankingMenu').click()
		cy.url().should('include', 'online-banking.html')
		cy.get('h1').should('be.visible')
		cy.get('h3').should(
			'contain.text',
			'Our Bank is trusted by over 1,000,000 customers world wide'
		)
		cy.get('#account_summary_link').should('contain.text', 'Account Summary')
		cy.get('#account_activity_link').should('contain.text', 'Account Activity')
		cy.get('#transfer_funds_link').should('contain.text', 'Transfer Funds')
	})
	it('Should display feedback content', () => {
		cy.get('#feedback').click()
		cy.url().should('include', 'feedback.html')
		cy.get('h3').should('contain.text', 'Feedback')
	})
	it('Should display homepage content', () => {
		cy.contains('Zero Bank').click()
		cy.url().should('include', 'index.html')
	})
})
