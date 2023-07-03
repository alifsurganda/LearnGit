describe('Get New User', () => {
	it('Successsfully create new user', () => {
		var user = {
			name: 'Alif Surganda',
			job: 'Education',
		}

		cy.request('POST', 'https://reqres.in/api/users', user).then(
			(response) => {
				expect(response.status).equal(201)
				expect(response.body).to.have.property('name', 'Alif Surganda')
				expect(response.body).to.have.property('job', 'Education')
			}
		)
	})
})
