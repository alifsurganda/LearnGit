import SearchPage from './search.page'
const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor')

Given('I enter the word online', () => {
	SearchPage.visit()
})

When('I click enter', () => {
	SearchPage.fillSearchTerm('searchterm')
	SearchPage.fillEnter('searchterm')
	SearchPage.Result()
})

Then('I should see homepage', () => {
	cy.get('h2').should('contain.text', 'Search Results:')
})
