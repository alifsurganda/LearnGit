const URL = 'http://zero.webappsecurity.com/index.html'
const SEARCHTERM = '#searchTerm'
const Result = 'Search Results:'

class SearchPage {
	static visit() {
		cy.visit(URL)
	}
	static fillSearchTerm(searhterm) {
		cy.get(SEARCHTERM).type('online {enter}')
	}
	static fillEnter(searchterm) {
		cy.get(SEARCHTERM).type('some text {enter}')
	}
	static Result() {
		cy.get('h2').should('contain.text', 'Search Results:')
	}
}

export default SearchPage
